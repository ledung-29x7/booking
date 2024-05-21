package Aptech.booking_hotel.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.service.BookingService;
import Aptech.booking_hotel.service.UserService;
import jakarta.persistence.EntityNotFoundException;

@RestController

@RequestMapping("/customer")
public class CustomerController {
    private UserService userService;
    private BookingService bookingService;
    @Autowired
    public CustomerController(UserService userService,
                            BookingService bookingService){
        this.bookingService=bookingService;
        this.userService=userService;
    }
    // lấy khach hang id hien tai dang dang nhap
    private Long getCurrentCustomerId(){
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        return userService.findUserByUsername(name).getId();
    }

    @GetMapping("/bookings")
    public ResponseEntity<?> listBookings(){
        try {
            Long customerId = getCurrentCustomerId();
            List<BookingDTO> bookingDTOs = bookingService.findBookingsByCustomerId(customerId);
            return ResponseEntity.ok(bookingDTOs);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ôi! Lỗi rồi. Vui lòng thử lại");
        }
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Long id){
        try {
            Long customerId = getCurrentCustomerId();
            BookingDTO bookingDTO = bookingService.findBookingByIdAndCustomerId(id, customerId);
            LocalDate checkinDate = bookingDTO.getCheckinDate();
            LocalDate checkoutDate = bookingDTO.getCheckoutDate();
            long durationDays = ChronoUnit.DAYS.between(checkinDate,checkoutDate);
            bookingDTO.setDurationDays(customerId); // lay so ngay luu tru
            return ResponseEntity.ok(bookingDTO);
        }catch(EntityNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Booing not found");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ôi! Lỗi rồi. Vui lòng thử lại");
        }
    }
}
