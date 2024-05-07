package Aptech.booking_hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.exception.HotelAlreadyExistsException;
import Aptech.booking_hotel.exception.UsernameAlreadyExistsException;
import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.HotelDTO;
import Aptech.booking_hotel.model.validate.UserDTO;
import Aptech.booking_hotel.service.BookingService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = ("*"))
@RequestMapping("/admin")
public class AdminController {
    private UserService userService;
    private HotelService hotelService;
    private BookingService bookingService;

    @Autowired
    public AdminController(UserService userService, HotelService hotelService, BookingService bookingService){
        this.bookingService=bookingService;
        this.userService=userService;
        this.hotelService=hotelService;
    }

    // load all user
    @GetMapping("/users")
    public ResponseEntity<List<UserDTO>> listUsers(){
        List<UserDTO> userDTOs = userService.findAllUsers();
        return ResponseEntity.ok(userDTOs);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id){
        try {
            UserDTO userDTO = userService.findUserById(id);
            return ResponseEntity.ok(userDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserDTO> editUserById(@PathVariable Long id, @Valid @RequestBody UserDTO userDTO, BindingResult result){
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        try {
            userService.updateUser(userDTO);
            return ResponseEntity.ok(userDTO);
        } catch (UsernameAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }

        @GetMapping("/hotels")
    public ResponseEntity<List<HotelDTO>> listHotels() {
        List<HotelDTO> hotelDTOList = hotelService.findAllHotels();
        return ResponseEntity.ok(hotelDTOList);
    }

    @GetMapping("/hotels/{id}")
    public ResponseEntity<HotelDTO> getHotelById(@PathVariable Long id) {
        try {
            HotelDTO hotelDTO = hotelService.findHotelDtoById(id);
            return ResponseEntity.ok(hotelDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

        @PutMapping("/hotels/{id}")
    public ResponseEntity<HotelDTO> editHotel(
        @PathVariable Long id,
        @Valid @RequestBody HotelDTO hotelDTO,
        BindingResult result
    ) {
        if (result.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        try {
            hotelService.updateHotel(hotelDTO);
            return ResponseEntity.ok(hotelDTO);
        } catch (HotelAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
    }
    @DeleteMapping("/hotels/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
        return ResponseEntity.noContent().build();
    }

     @GetMapping("/bookings")
    public ResponseEntity<List<BookingDTO>> listBookings() {
        List<BookingDTO> bookingDTOList = bookingService.findAllBooking();
        return ResponseEntity.ok(bookingDTOList);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
        try {
            BookingDTO bookingDTO = bookingService.findBookingById(id);
            return ResponseEntity.ok(bookingDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
