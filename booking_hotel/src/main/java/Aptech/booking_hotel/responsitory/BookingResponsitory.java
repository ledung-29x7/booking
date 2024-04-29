package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Booking;

public interface BookingResponsitory extends JpaRepository<Booking,Long> {
    
}
