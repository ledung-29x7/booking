package Aptech.booking_hotel.model.validate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import Aptech.booking_hotel.model.enums.PaymentMethod;
import Aptech.booking_hotel.model.enums.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingDTO {
    private Long id;
    private String confirmationNumber;
    private LocalDateTime bookingDate;
    private Long customerId;
    private Long hotelId;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private List<RoomSelectionDTO> roomSelections = new ArrayList<>();
    private double totalPrice;
    private String hotelName;
    private AddressDTO hotelAddress;
    private String customerName;
    private String customerEmail;
    private PaymentStatus paymentStatus;
    private PaymentMethod paymentMethod;
    private Long durationDays;

}
