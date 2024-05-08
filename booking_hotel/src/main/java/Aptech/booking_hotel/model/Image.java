package Aptech.booking_hotel.model;

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
    
    @Column(nullable = false)
    private String imageCover;

    private String detailedPhoto1;
    private String detailedPhoto2;
    private String detailedPhoto3;
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
