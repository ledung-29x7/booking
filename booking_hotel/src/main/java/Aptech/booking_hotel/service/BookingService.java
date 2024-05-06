package Aptech.booking_hotel.service;

import java.util.List;

import Aptech.booking_hotel.model.Booking;
import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;

public interface BookingService {
    Booking saveBooking(BookingInitiationDTO bookingInitiationDTO, Long customerId);
    BookingDTO confirmBooking(BookingInitiationDTO bookingInitiationDTO, Long customerId);
    List<BookingDTO> findAllBooking();
    BookingDTO findBookingById(Long bookingId);
    List<BookingDTO> findBookingsByCustomerId(Long customerId);
    BookingDTO findBookingByIdAndCustomerId(Long bookingId, Long customerId);
    List<BookingDTO> findBookingByManagerId(Long managerId);
    BookingDTO fingBookingByIdAndManagerId(Long bookingId, Long managerId);
    BookingDTO mapBookingModelToBookingDto(Booking booking);
    
}
