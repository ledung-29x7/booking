package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Service;

public interface ServiceResponsitory extends JpaRepository<Service,Long> {
    
}
