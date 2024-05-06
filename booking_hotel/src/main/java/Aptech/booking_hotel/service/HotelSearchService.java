package Aptech.booking_hotel.service;

import java.time.LocalDate;
import java.util.List;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.validate.HotelAvailabilityDTO;

public interface HotelSearchService {

    // tìm kiếm danh sách hotel khả dụng theo thành phố và ngày checkin checkout
    List<HotelAvailabilityDTO> findAvailableHotelsByCityAndDate(String city, LocalDate checkinDate, LocalDate checkoutDate);

    HotelAvailabilityDTO findAvailableHotelById(Long hotelId, LocalDate checkinDate, LocalDate checkoutDate);

    HotelAvailabilityDTO mapHotelToHotelAvailabilityDto(Hotel hotel, LocalDate checkinDate, LocalDate checkoutDate);


}
