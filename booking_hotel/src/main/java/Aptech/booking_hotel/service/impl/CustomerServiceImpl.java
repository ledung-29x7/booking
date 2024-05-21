package Aptech.booking_hotel.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Customer;
import Aptech.booking_hotel.responsitory.CustomerResponsitory;
import Aptech.booking_hotel.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

    private CustomerResponsitory customerResponsitory;

    @Autowired
    public CustomerServiceImpl(CustomerResponsitory customerResponsitory){
        this.customerResponsitory = customerResponsitory;
    }

    @Override
    public Optional<Customer> findByUserId(Long userId) {
        return customerResponsitory.findById(userId);
    }

    @Override
    public Optional<Customer> findByUsername(String username) {
        return customerResponsitory.findByUsername(username);
    }
    
}
