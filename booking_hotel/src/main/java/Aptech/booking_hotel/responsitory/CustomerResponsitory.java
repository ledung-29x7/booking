package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Customer;

public interface CustomerResponsitory extends JpaRepository<Customer,Long> {
    
}
