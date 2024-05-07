package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Service;
@Repository
public interface ServiceResponsitory extends JpaRepository<Service,Long> {
    
}
