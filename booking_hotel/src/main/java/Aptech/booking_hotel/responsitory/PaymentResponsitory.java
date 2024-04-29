package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Payment;

public interface PaymentResponsitory extends JpaRepository<Payment,Long> {
    
}
