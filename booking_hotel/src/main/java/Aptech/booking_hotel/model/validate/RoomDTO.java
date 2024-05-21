package Aptech.booking_hotel.model.validate;



import java.util.ArrayList;
import java.util.List;

import Aptech.booking_hotel.model.Image;
//import Aptech.booking_hotel.model.RoomServiceModel;
import Aptech.booking_hotel.model.Service;
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

    //private RoomServiceModel roomService;
    private List<ServiceDTO> serviceDTOs = new ArrayList<>();
    
    private List<ImageDTO> imageDTOs = new ArrayList<>();
}
