package Aptech.booking_hotel.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.validate.ImageDTO;
import Aptech.booking_hotel.model.validate.RoomDTO;
import Aptech.booking_hotel.responsitory.RoomResponsitory;
import Aptech.booking_hotel.service.ImageService;
import Aptech.booking_hotel.service.RoomService;
import jakarta.persistence.EntityNotFoundException;

@Service
public class RoomServiceImpl implements RoomService {

    private RoomResponsitory roomResponsitory;
    private ImageService imageService;

    @Autowired
    public RoomServiceImpl(RoomResponsitory roomResponsitory, ImageService imageService){
        this.roomResponsitory=roomResponsitory;
        this.imageService=imageService;
    }


    @Override
    public Room saveRoom(RoomDTO roomDTO, Hotel hotel) {
        Room room = mapRoomDtoToRoom(roomDTO, hotel);
        room = roomResponsitory.save(room);
        return room;
    }

    @Override
    public List<Room> saveRooms(List<RoomDTO> roomDTOs, Hotel hotel) {
                List<Room> rooms = roomDTOs.stream()
                .map(roomDTO -> saveRoom(roomDTO, hotel)) // lưu từng room một
                .collect(Collectors.toList());
                return rooms;
    }

    @Override
    public Optional<Room> findRoomById(Long id) {
        return roomResponsitory.findById(id);
    }

    @Override
    public Room updateRoom(RoomDTO roomDTO) {
        // lấy room theo id
        Room existingRoom = roomResponsitory.findById(roomDTO.getId()).orElseThrow(()-> new EntityNotFoundException("Room not found"));

        // gán giá trị mới 
        existingRoom.setRoomType(roomDTO.getRoomType());
        existingRoom.setRoomCount(roomDTO.getRoomCount());
        existingRoom.setPricePerNight(roomDTO.getPricePerNight());
        //existingRoom.setImage(roomDTO.getImage());

        Room updateRoom = roomResponsitory.save(existingRoom);
        return updateRoom;
    }

    @Override
    public void deleteRoom(Long id) {
        roomResponsitory.deleteById(id);
    }

    @Override
    public Room mapRoomDtoToRoom(RoomDTO roomDTO, Hotel hotel) {
        Room room = Room.builder()
                        .hotel(hotel)
                        .roomType(roomDTO.getRoomType())
                        .roomCount(roomDTO.getRoomCount())
                        .pricePerNight(roomDTO.getPricePerNight())
                        //.services()
                        .build();
        return room;
    }

    @Override
    public RoomDTO mapRoomTRoomDto(Room room) {
        List<ImageDTO> imageDTOs = room.getImages().stream()
                                        .map(imageService::mapImageToImageDto)
                                        .collect(Collectors.toList());
        return RoomDTO.builder()
                    .id(room.getId())
                    .hotelId(room.getHotel().getId())
                    .roomType(room.getRoomType())
                    .roomCount(room.getRoomCount())
                    .pricePerNight(room.getPricePerNight())
                    .imageDTOs(imageDTOs)
                    //.services(room.getServices())
                    .build();
    }
    
}
