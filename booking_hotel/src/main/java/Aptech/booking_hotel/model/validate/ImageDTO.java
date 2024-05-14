package Aptech.booking_hotel.model.validate;

import java.util.List;

import Aptech.booking_hotel.model.Image;
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
public class ImageDTO {
    private Long id;
    private String name;
    private String type;
    private byte[] image;
}
