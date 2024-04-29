package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Availability;

public interface AvailabilityResponsitory extends JpaRepository<Availability,Long> {
    
}
