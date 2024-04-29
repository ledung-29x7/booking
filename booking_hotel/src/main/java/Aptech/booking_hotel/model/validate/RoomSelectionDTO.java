package Aptech.booking_hotel.model.validate;

import Aptech.booking_hotel.model.enums.RoomType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomSelectionDTO {
    private RoomType roomType;
    private int count;
}
