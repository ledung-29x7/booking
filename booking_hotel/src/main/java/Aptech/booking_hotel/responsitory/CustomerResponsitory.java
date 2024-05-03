package Aptech.booking_hotel.responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Customer;
@Repository
public interface CustomerResponsitory extends JpaRepository<Customer,Long> {

    Optional<Customer> findByUserId(Long userId);

    // truy vấn customer theo username
    @Query("SELECT c FROM Customer c WHERE c.user.username = :username")
    Optional<Customer> findByUsername(@Param("username") String username);
}
