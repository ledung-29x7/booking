package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.RoomService;

public interface RoomServiceResponsitory extends JpaRepository<RoomService,Long> {
    
}
