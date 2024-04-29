package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Hotel;

public interface HotelResponsitory extends JpaRepository<Hotel,Long> {
    
}
