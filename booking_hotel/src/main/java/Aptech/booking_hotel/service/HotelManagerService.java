package Aptech.booking_hotel.service;

import Aptech.booking_hotel.model.HotelManager;
import Aptech.booking_hotel.model.User;

public interface HotelManagerService {
    HotelManager findByUser(User user);
}
