package Aptech.booking_hotel.service;

import java.time.LocalDate;
import java.util.List;

import Aptech.booking_hotel.model.validate.RoomSelectionDTO;

public interface AvailabilityService {
    // lấy số lượng phòng trống 
    Integer getMinAvailableRooms(Long id, LocalDate checkinDate, LocalDate checkoutDate);

    // cập nhật phòng trống
    void updateAvailabilities(Long hotelId, LocalDate checkinDate, LocalDate checkoutDate, List<RoomSelectionDTO> roomSelections);
}
