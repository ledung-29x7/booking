package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Room;

public interface RoomResponsitory extends JpaRepository<Room,Long> {
    
}
