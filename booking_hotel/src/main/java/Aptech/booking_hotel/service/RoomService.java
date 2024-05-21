package Aptech.booking_hotel.service;

import java.util.List;
import java.util.Optional;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.validate.RoomDTO;

public interface RoomService {
    Room saveRoom (RoomDTO roomDTO, Hotel hotel);
    List<Room> saveRooms(List<RoomDTO> roomDTOs, Hotel hotel);
    Optional<Room> findRoomById (Long id);
    //List<Room> findRoomByHotelId(Long hotelId);
    Room updateRoom(RoomDTO roomDTO);
    void deleteRoom (Long id);
    Room mapRoomDtoToRoom(RoomDTO roomDTO, Hotel hotel);
    RoomDTO mapRoomTRoomDto(Room room);
}
