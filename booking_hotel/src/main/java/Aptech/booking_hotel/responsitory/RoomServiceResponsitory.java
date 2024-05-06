package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.RoomService;
@Repository
public interface RoomServiceResponsitory extends JpaRepository<RoomService,Long> {
    
}
