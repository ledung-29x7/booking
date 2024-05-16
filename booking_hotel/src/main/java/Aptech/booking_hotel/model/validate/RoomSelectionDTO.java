package Aptech.booking_hotel.model.validate;

import Aptech.booking_hotel.model.enums.RoomType;
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
public class RoomSelectionDTO {
    private RoomType roomType;
    private int count;
}
