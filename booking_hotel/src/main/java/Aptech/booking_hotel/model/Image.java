package Aptech.booking_hotel.model;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
 
    @Column(name = "cover_image_path")
    private String imageCover;

    @Column(name = "detail_image1_path")
    private String detailedPhoto1;
    
    @Column(name = "detail_image2_path")
    private String detailedPhoto2;
    
    @Column(name = "detail_image3_path")
    private String detailedPhoto3;
    
    @Column(name = "detail_image4_path")
    private String detailedPhoto4;

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", imageCover='" + getImageCover() + "'" +
            ", detailedPhoto1='" + getDetailedPhoto1() + "'" +
            ", detailedPhoto2='" + getDetailedPhoto2() + "'" +
            ", detailedPhoto3='" + getDetailedPhoto3() + "'" +
            ", detailedPhoto4='" + getDetailedPhoto4() + "'" +
            "}";
    }

}
