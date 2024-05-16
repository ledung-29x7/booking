package Aptech.booking_hotel.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.exception.HotelAlreadyExistsException;
import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.HotelDTO;
import Aptech.booking_hotel.model.validate.HotelRegistrationDTO;
import Aptech.booking_hotel.service.BookingService;

import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.ImageService;
import Aptech.booking_hotel.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/manager")
public class ManagerController {
    private HotelService hotelService;
    private UserService userService ;
    private BookingService bookingService;
    private ImageService imageService;
    @Autowired
    public ManagerController(HotelService hotelService,
                             UserService userService, 
                             BookingService bookingService,
                             ImageService imageService){
        this.bookingService = bookingService;
        this.userService = userService;
        this.hotelService= hotelService;
        this.imageService=imageService;
    }
    
    // thêm mới hotel
    @PostMapping("/hotels")
    public ResponseEntity<?> addHotel(@Valid @RequestBody HotelRegistrationDTO hotelRegistrationDTO,
                                             BindingResult result
                                              ){
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.getAllErrors());
        }
        try {
            Hotel hotel = hotelService.saveHotel(hotelRegistrationDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("Hotel added successfully");
        } catch (HotelAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    // lấy id của hotelmanager đang đang nhập
    private long getCurrentManagerId(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userService.findUserByUsername(username).getHotelManager().getId();
    }
    // lấy tất cả khách sạn mà manager này quản lý
    @GetMapping("/hotels")
    public ResponseEntity<List<HotelDTO>> listHotels(){
        Long managerId = getCurrentManagerId();
        try {
            List<HotelDTO> listHotels = hotelService.findAllHotelDtosByManagerId(managerId);
            return ResponseEntity.ok(listHotels);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }


    @PutMapping("/hotels/{id}")
    public ResponseEntity<?> editHotel (@PathVariable Long id, @Valid @RequestBody HotelDTO hotelDTO, BindingResult result){
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result.getAllErrors());
        }
        try {
            Long managerId = getCurrentManagerId();
            hotelDTO.setId(id);
            hotelService.updateHotelByManagerId(hotelDTO, managerId);
            return ResponseEntity.ok("Hotel updated successfully");
        }
        catch (HotelAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
         catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Hotel not found");
        }
    }

    @DeleteMapping("/hotels/{id}")
    public ResponseEntity<?> deleteHotel(@PathVariable Long id){
        Long managerId = getCurrentManagerId();
        hotelService.deleteHotelByIdAndManagerId(id, managerId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    // Lấy danh sách đặt chỗ
    @GetMapping("/bookings")
    public ResponseEntity<?> listBookings() {
        try {
            Long managerId = getCurrentManagerId();
            List<BookingDTO> bookingDTOs = bookingService.findBookingByManagerId(managerId);
            return ResponseEntity.ok(bookingDTOs);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Bookings not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
        }
    }

    // xem chi tiet dat phong theo id
    @GetMapping("/booking/{id}")
    public ResponseEntity<?> bookingDetail(@PathVariable Long id){
        try {
            Long managerId = getCurrentManagerId();
            BookingDTO bookingDTO = bookingService.fingBookingByIdAndManagerId(id, managerId);
            LocalDate checkinDate = bookingDTO.getCheckinDate();
            LocalDate checkoutDate = bookingDTO.getCheckoutDate();
            Long durationDays = ChronoUnit.DAYS.between(checkinDate, checkoutDate);
    
            bookingDTO.setDurationDays(durationDays);
            return ResponseEntity.ok(bookingDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booking not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
        }
    }    
}
