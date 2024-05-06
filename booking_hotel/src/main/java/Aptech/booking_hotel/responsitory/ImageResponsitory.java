package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Image;
@Repository
public interface ImageResponsitory extends JpaRepository<Image,Long> {
    
}
