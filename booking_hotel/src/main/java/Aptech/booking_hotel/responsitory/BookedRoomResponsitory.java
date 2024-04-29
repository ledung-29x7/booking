package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.BookedRoom;

public interface BookedRoomResponsitory extends JpaRepository<BookedRoom,Long> {
    
}
