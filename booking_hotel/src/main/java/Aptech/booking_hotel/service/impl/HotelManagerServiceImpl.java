package Aptech.booking_hotel.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.HotelManager;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.responsitory.HotelManagerResponsitory;
import Aptech.booking_hotel.service.HotelManagerService;
import jakarta.persistence.EntityNotFoundException;
@Service
public class HotelManagerServiceImpl implements HotelManagerService {

    private HotelManagerResponsitory hotelManagerResponsitory;
    @Autowired
    public HotelManagerServiceImpl(HotelManagerResponsitory hotelManagerResponsitory){
        this.hotelManagerResponsitory= hotelManagerResponsitory;
    }
    @Override
    public HotelManager findByUser(User user) {
        return hotelManagerResponsitory.findByUser(user).orElseThrow(()-> new EntityNotFoundException("HotelManager not found for user"+ user.getUsername()));
    }
    
}
