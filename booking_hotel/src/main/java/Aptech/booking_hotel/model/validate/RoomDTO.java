package Aptech.booking_hotel.model.validate;

import Aptech.booking_hotel.model.enums.RoomType;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
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
public class RoomDTO {
    private Long id;
    private Long hotelId;
    private RoomType roomType;

    @NotNull(message = "Room number cannot be empty")
    @PositiveOrZero(message ="Room number must be 0 or more" )
    private Integer roomCount;

    @NotNull(message = "Price cannot be empty")
    @PositiveOrZero(message ="Price Per Night must be 0 or more" )
    private Double pricePerNight;
}
