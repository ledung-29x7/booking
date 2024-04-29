package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.HotelManager;

public interface HotelManagerResponsitory extends JpaRepository<HotelManager,Long> {
    
}
