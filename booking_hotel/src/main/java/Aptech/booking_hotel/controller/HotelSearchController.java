package Aptech.booking_hotel.controller;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.model.validate.HotelAvailabilityDTO;
import Aptech.booking_hotel.service.HotelSearchService;
import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/search")
public class HotelSearchController {
    private HotelSearchService hotelSearchService;

    @Autowired
    public HotelSearchController(HotelSearchService hotelSearchService){
        this.hotelSearchService = hotelSearchService;
    }
    // kiểm tra xem ngày checkin có là ngày trong quá khứ không , ngày checkout không được trước ngày checkin
    private void validateCheckinAndCheckoutDates(LocalDate checkinDate, LocalDate checkoutDate) {
        if (checkinDate.isBefore(LocalDate.now())) {
            throw new IllegalArgumentException("Check-in date cannot be in the past");
        }
        if (checkoutDate.isBefore(checkinDate.plusDays(1))) {
            throw new IllegalArgumentException("Check-out date must be after check-in date");
        }
    }

    // trả về thông tin phòng trống 
    @GetMapping("/availability")
    public ResponseEntity<List<HotelAvailabilityDTO>> findAvailableHotelsByCityAndDate(@RequestParam String city, 
                                                                                    @RequestParam String checkinDate, 
                                                                                    @RequestParam String checkoutDate)
    {
            try {
                LocalDate parsedCheckinDate = LocalDate.parse(checkinDate);
                LocalDate parsedCheckoutDate = LocalDate.parse(checkoutDate);
                validateCheckinAndCheckoutDates(parsedCheckinDate, parsedCheckoutDate);

                List<HotelAvailabilityDTO> hotels = hotelSearchService.findAvailableHotelsByCityAndDate(city, parsedCheckinDate, parsedCheckoutDate);
                return ResponseEntity.ok(hotels);
            } catch (DateTimeParseException e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }catch(IllegalArgumentException e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(null);
            }
    }

    @GetMapping("/{hotelId}")
    public ResponseEntity<HotelAvailabilityDTO> findAvailableHotelById(@PathVariable Long hotelId,
                                                                       @RequestParam String checkinDate,
                                                                       @RequestParam String checkoutDate )
    {
        try {
            LocalDate parsedChekinDate = LocalDate.parse(checkinDate);
            LocalDate parsedCheckoutDate = LocalDate.parse(checkoutDate);
            validateCheckinAndCheckoutDates(parsedChekinDate, parsedCheckoutDate);

            HotelAvailabilityDTO hotel = hotelSearchService.findAvailableHotelById(hotelId, parsedChekinDate, parsedCheckoutDate);

            return ResponseEntity.ok(hotel);
        }catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null);
        } catch (DateTimeParseException e) {     
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(null);
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
