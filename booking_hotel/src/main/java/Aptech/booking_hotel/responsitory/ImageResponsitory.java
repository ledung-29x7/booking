package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Image;

public interface ImageResponsitory extends JpaRepository<Image,Long> {
    
}
