package Aptech.booking_hotel.responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.HotelManager;
import Aptech.booking_hotel.model.User;
@Repository
public interface HotelManagerResponsitory extends JpaRepository<HotelManager,Long> {
    Optional<HotelManager> findByUser(User user);
}
