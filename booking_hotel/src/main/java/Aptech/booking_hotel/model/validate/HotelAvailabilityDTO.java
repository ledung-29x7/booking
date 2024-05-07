package Aptech.booking_hotel.model.validate;

import java.util.ArrayList;
import java.util.List;

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
public class HotelAvailabilityDTO {
    private Long id;
    private String name;
    private AddressDTO addressDTO;
    private List<RoomDTO> roomDTOs = new ArrayList<>();
    private Integer maxAvailableSingleRooms; // số lượng phòng còn
    private Integer maxAvailableDoubleRooms;
    private Integer maxAvailableFamilyRooms;
}
