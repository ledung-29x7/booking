package Aptech.booking_hotel.service;

import java.util.Optional;

import Aptech.booking_hotel.model.Customer;

public interface CustomerService {
    Optional<Customer> findByUserId(Long userId);
    Optional<Customer> findByUsername(String username);
}
