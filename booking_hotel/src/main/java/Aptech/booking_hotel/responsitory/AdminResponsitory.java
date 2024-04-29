package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Admin;

public interface AdminResponsitory extends JpaRepository<Admin,Long> {
    
}
