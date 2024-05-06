package Aptech.booking_hotel.service.impl;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.BookedRoom;
import Aptech.booking_hotel.model.Booking;
import Aptech.booking_hotel.model.Customer;
import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Payment;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.validate.AddressDTO;
import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;
import Aptech.booking_hotel.model.validate.RoomSelectionDTO;
import Aptech.booking_hotel.responsitory.BookingResponsitory;
import Aptech.booking_hotel.service.AvailabilityService;
import Aptech.booking_hotel.service.BookingService;
import Aptech.booking_hotel.service.CustomerService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.PaymentService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
@Service
public class BookingServiceImpl implements BookingService {

    private BookingResponsitory bookingResponsitory;
    private AvailabilityService availabilityService;
    private CustomerService customerService;
    private HotelService hotelService;
    private PaymentService paymentService;

    @Autowired
    public BookingServiceImpl(BookingResponsitory bookingResponsitory,
                                AvailabilityService availabilityService,
                                CustomerService customerService,
                                HotelService hotelService,
                                PaymentService paymentService
    ){
        this.bookingResponsitory=bookingResponsitory;
        this.availabilityService=availabilityService;
        this.customerService=customerService;
        this.hotelService=hotelService;
        this.paymentService=paymentService;
    }
        // Kiểm tra xem ngày đặt phòng có trong quá khứ hay không và ngày trả phòng không được trước ngày đặt phòng
        private void validateBookingDates(LocalDate checkinDate, LocalDate checkoutDate) {
        if (checkinDate.isBefore(LocalDate.now())) {
            throw new IllegalArgumentException("Check-in date cannot be in the past");
        }
        if (checkoutDate.isBefore(checkinDate.plusDays(1))) {
            throw new IllegalArgumentException("Check-out date must be after check-in date");
        }
    }

    private Booking mapBookingInitDtoToBookingModel(BookingInitiationDTO bookingInitiationDTO, Customer customer, Hotel hotel){
        Booking booking = Booking.builder()
                                .customer(customer)
                                .hotel(hotel)
                                .checkinDate(bookingInitiationDTO.getCheckinDate())
                                .checkoutDate(bookingInitiationDTO.getCheckoutDate())
                                .build();
        for (RoomSelectionDTO  roomSelection : bookingInitiationDTO.getRoomSelections()) {
            if (roomSelection.getCount() > 0) {
                BookedRoom bookedRoom = BookedRoom.builder()
                                                .booking(booking)
                                                .roomType(roomSelection.getRoomType())
                                                .count(roomSelection.getCount())
                                                .build();
                booking.getBookedRooms().add(bookedRoom);
            }
        }
        return booking;
    }

    @Override
    @Transactional
    public Booking saveBooking(BookingInitiationDTO bookingInitiationDTO, Long customerId) {
        validateBookingDates(bookingInitiationDTO.getCheckinDate(), bookingInitiationDTO.getCheckoutDate());
        Customer customer = customerService.findByUserId(customerId).orElseThrow(()-> new EntityNotFoundException("Customer not found"));
        Hotel hotel = hotelService.findHotelById(bookingInitiationDTO.getHotelId()).orElseThrow(()-> new EntityNotFoundException("Hotel not found"));
        Booking booking = mapBookingInitDtoToBookingModel(bookingInitiationDTO,customer,hotel);
        return bookingResponsitory.save(booking);
    }



    @Override
    public BookingDTO confirmBooking(BookingInitiationDTO bookingInitiationDTO, Long customerId) {
        Booking savedBooking = this.saveBooking(bookingInitiationDTO, customerId);
        Payment savePayment = paymentService.savePayment(bookingInitiationDTO, savedBooking);
        savedBooking.setPayment(savePayment);
        bookingResponsitory.save(savedBooking);

        availabilityService.updateAvailabilities(bookingInitiationDTO.getHotelId(), bookingInitiationDTO.getCheckinDate(), bookingInitiationDTO.getCheckoutDate(), bookingInitiationDTO.getRoomSelections());
        return mapBookingModelToBookingDto(savedBooking);

    }

    @Override
    public List<BookingDTO> findAllBooking() {
        List<Booking> bookings = bookingResponsitory.findAll();
        return bookings.stream().map(this::mapBookingModelToBookingDto).toList();
    }

    @Override
    public BookingDTO findBookingById(Long bookingId) {
        Booking booking = bookingResponsitory.findById(bookingId).orElseThrow(()-> new EntityNotFoundException("Booking not found"));
        return mapBookingModelToBookingDto(booking);
    }

    @Override
    public List<BookingDTO> findBookingsByCustomerId(Long customerId) {
        List<Booking> bookings = bookingResponsitory.findBookingsByCustomerId(customerId);
        return bookings.stream()
                        .map(this::mapBookingModelToBookingDto)
                        .sorted(Comparator.comparing(BookingDTO::getCheckinDate))
                        .collect(Collectors.toList());
    }

    @Override
    public BookingDTO findBookingByIdAndCustomerId(Long bookingId, Long customerId) {
        Booking booking = bookingResponsitory.findBookingByIdAndCustomerId(bookingId, customerId)
                                            .orElseThrow(()-> new EntityNotFoundException("Booking not found"));
        return mapBookingModelToBookingDto(booking);
    }

    @Override
    public List<BookingDTO> findBookingByManagerId(Long managerId) {
        List<Hotel> hotels = hotelService.findAllHotelsByManagerId(managerId);
        return hotels.stream()
                    .flatMap(hotel -> bookingResponsitory.findBookingsByHotelId(hotel.getId()).stream())
                    .map(this::mapBookingModelToBookingDto)
                    .collect(Collectors.toList());
    }

    @Override
    public BookingDTO fingBookingByIdAndManagerId(Long bookingId, Long managerId) {
        Booking booking = bookingResponsitory.findBookingByIdAndHotel_HotelManagerId(bookingId, managerId)
                                            .orElseThrow(()-> new EntityNotFoundException("Booking not found with ID: " + bookingId + " and manager ID: " + managerId ));
        return mapBookingModelToBookingDto(booking);
    }

    @Override
    public BookingDTO mapBookingModelToBookingDto(Booking booking) {
        AddressDTO addressDTO = AddressDTO.builder()
                                            .addressLine(booking.getHotel().getAddress().getAddressLine())
                                            .district(booking.getHotel().getAddress().getDistrict())
                                            .city(booking.getHotel().getAddress().getCity())
                                            .country(booking.getHotel().getAddress().getCountry())
                                            .build();
        List<RoomSelectionDTO> roomSelections = booking.getBookedRooms().stream()
                                                        .map(room-> RoomSelectionDTO.builder()
                                                            .roomType(room.getRoomType())
                                                            .count(room.getCount())
                                                            .build())
                                                        .collect(Collectors.toList());
        User customerUser = booking.getCustomer().getUser();

        return BookingDTO.builder()
                        .id(booking.getId())
                        .confirmationNumber(booking.getConfirmationNumber())
                        .bookingDate(booking.getBookingDate())
                        .customerId(booking.getCustomer().getId())
                        .hotelId(booking.getHotel().getId())
                        .checkinDate(booking.getCheckinDate())
                        .checkoutDate(booking.getCheckoutDate())
                        .roomSelections(roomSelections)
                        .totalPrice(booking.getPayment().getTotalPrice())
                        .hotelName(booking.getHotel().getName())
                        .hotelAddress(addressDTO)
                        .customerName(customerUser.getFirstName()+" "+customerUser.getLastName())
                        .customerEmail(customerUser.getUsername())
                        .paymentStatus(booking.getPayment().getPaymentStatus())
                        .paymentMethod(booking.getPayment().getPaymentMethod())
                        .build();
    }
    
}
