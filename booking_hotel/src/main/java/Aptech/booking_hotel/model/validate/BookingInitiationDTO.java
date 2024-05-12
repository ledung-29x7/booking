package Aptech.booking_hotel.model.validate;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

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
@Component
public class BookingInitiationDTO {
    private Long hotelId;
    private LocalDate checkinDate;
    private LocalDate checkoutDate;
    private Long durationDays ;// số ngày khách ở khách sạn
    private List<RoomSelectionDTO> roomSelections = new ArrayList<>();
    private BigDecimal totalPrice;
}
