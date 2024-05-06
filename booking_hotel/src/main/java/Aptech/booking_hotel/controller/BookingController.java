package Aptech.booking_hotel.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;
import Aptech.booking_hotel.model.validate.HotelDTO;
import Aptech.booking_hotel.model.validate.PaymentCardDTO;
import Aptech.booking_hotel.model.validate.UserDTO;
import Aptech.booking_hotel.service.BookingService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.UserService;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/booking")
public class BookingController {
    private HotelService hotelService;
    private UserService userService;
    private BookingService bookingService;

    @Autowired
    public BookingController(HotelService hotelService,
                            UserService userService,
                            BookingService bookingService){
        this.hotelService= hotelService;
        this.bookingService= bookingService;
        this.userService= userService;
        }
    

    // đặt phòng 
    // nhập hotelId, checkinDate, checkoutDate
    @PostMapping("/initiate")
    public ResponseEntity<BookingInitiationDTO> initiateBooking(@RequestBody BookingInitiationDTO bookingInitiationDTO){
        return ResponseEntity.ok(bookingInitiationDTO);
    }

    // lấy thông tin khách sạn bằng id
    @GetMapping("/hotel/{hotelID}")
    public ResponseEntity<HotelDTO> getHotelInfor(@PathVariable Long hotelID){
        HotelDTO hotelDTO = hotelService.findHotelDtoById(hotelID);
        if (hotelDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // không tìm thấy khách sạn
        }
        return ResponseEntity.ok(hotelDTO);
    }

    //Thanh Toan
    @PostMapping("/payment")
    public ResponseEntity<Object> confirmBooking (@RequestBody PaymentCardDTO paymentCardDTO, BindingResult result ){
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());// Trả về lỗi xác thực
        }
        try {
            Long userId = getLoggedInUserId();
            BookingDTO bookingDTO = bookingService.confirmBooking(null, userId);
            return ResponseEntity.ok(bookingDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Xảy ra lỗi bất ngờ. Hãy thử lại sau."); // Xử lý lỗi
        }
    }
        private Long getLoggedInUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        UserDTO userDTO = userService.findUserDTOByUsername(username);
        return userDTO.getId();
    }

    @GetMapping("/confirmation/{bookingId}")
    public ResponseEntity<BookingDTO> getBookingConfirmation(@PathVariable Long bookingId) {
        BookingDTO bookingDTO = bookingService.findBookingById(bookingId);
        if (bookingDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        LocalDate checkinDate = bookingDTO.getCheckinDate();
        LocalDate checkoutDate = bookingDTO.getCheckoutDate();
        Long durationDays = ChronoUnit.DAYS.between(checkinDate, checkoutDate); //lấy khoảng thời gian lưu trú

        bookingDTO.setDurationDays(durationDays);

        return ResponseEntity.ok(bookingDTO);
    }
    
}
