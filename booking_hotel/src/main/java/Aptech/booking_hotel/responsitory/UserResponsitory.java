package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.User;
@Repository
public interface UserResponsitory extends JpaRepository<User,Long> {
    User findByUsername(String username);
    Boolean existsByUsername(String username);
}
