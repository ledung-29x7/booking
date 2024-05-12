package Aptech.booking_hotel.model.validate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageDTO {
    
    private Long id;
    private String imageCover;

    private String detailedPhoto1;
    private String detailedPhoto2;
    private String detailedPhoto3;
    private String detailedPhoto4;
}
