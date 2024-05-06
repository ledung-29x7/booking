package Aptech.booking_hotel.service.impl;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import Aptech.booking_hotel.model.Address;
import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.HotelManager;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.validate.AddressDTO;
import Aptech.booking_hotel.model.validate.HotelDTO;
import Aptech.booking_hotel.model.validate.HotelRegistrationDTO;
import Aptech.booking_hotel.model.validate.RoomDTO;
import Aptech.booking_hotel.responsitory.HotelResponsitory;
import Aptech.booking_hotel.service.AddressService;
import Aptech.booking_hotel.service.HotelManagerService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.RoomService;
import Aptech.booking_hotel.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
@Service
public class HotelServiceImpl implements HotelService{

    private HotelResponsitory hotelResponsitory;
    private AddressService addressService;
    private RoomService roomService;
    private UserService userService;
    private HotelManagerService hotelManagerService;

    @Autowired 
    public HotelServiceImpl (
        HotelResponsitory hotelResponsitory,
        AddressService addressService,
        RoomService roomService,
        UserService userService,
        HotelManagerService hotelManagerService
        ){
            this.hotelResponsitory= hotelResponsitory;
            this.addressService=addressService;
            this.roomService=roomService;
            this.userService=userService;
            this.hotelManagerService=hotelManagerService;
        }

    @Override
    @Transactional
    public Hotel saveHotel(HotelRegistrationDTO hotelRegistrationDTO) {
        Optional<Hotel> existingHotel = hotelResponsitory.findByName(hotelRegistrationDTO.getName());
       // kiểm tra xem khách sạn đẫ đặc đăng ký hay chừa
        if (existingHotel.isPresent()) {
            throw new EntityNotFoundException("This hotel name is already registered!");
        }
        Hotel hotel = mapHotelRegistrationDtoToHotel(hotelRegistrationDTO);
        Address saveAddress = addressService.saveAddress(hotelRegistrationDTO.getAddressDTO());
        hotel.setAddress(saveAddress);

        // lấy tên người dùng đang đăng nhập để truy xuất đến khách sạn được người này quản lý 
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        HotelManager hotelManager = hotelManagerService.findByUser(userService.findUserByUsername(username));
        hotel.setHotelManager(hotelManager);

        // lưu khách sạn
        hotel = hotelResponsitory.save(hotel);
        
        // lưu room với khách sạn
        List<Room> saveRooms = roomService.saveRooms(hotelRegistrationDTO.getRoomDTOs(), hotel);
        hotel.setRooms(saveRooms);

        Hotel saveHotel = hotelResponsitory.save(hotel);
        return saveHotel;
    }

    @Override
    public HotelDTO findHotelDtoByName(String name) {
        Hotel hotel = hotelResponsitory.findByName(name).orElseThrow(()-> new EntityNotFoundException("Hotel not Found"));
        return mapHotelToHotelDto(hotel);
    }

    @Override
    public HotelDTO findHotelDtoById(Long id) {
        Hotel hotel = hotelResponsitory.findById(id).orElseThrow(()-> new EntityNotFoundException("Hotel not Found"));
        return mapHotelToHotelDto(hotel);
    }

    @Override
    public Optional<Hotel> findHotelById(Long id) {
        return hotelResponsitory.findById(id);
    }

    @Override
    public List<HotelDTO> findAllHotels() {
        List<Hotel> hotels = hotelResponsitory.findAll();
        return hotels.stream()
                .map(this::mapHotelToHotelDto)  // :: sử dụng để gọi đến hàm sau nó . gán vào con trỏ this
                .collect(Collectors.toList());
    }

    @Override
    public HotelDTO updateHotel(HotelDTO hotelDTO) {
        // lấy ra hotel cần cập nhật theo id
        Hotel existingHotel = hotelResponsitory.findById(hotelDTO.getId()).orElseThrow(()-> new EntityNotFoundException("Hotel not Found"));
        // kiểm tra xem tên khách sạn đã được đăng ký hay chưa
        if (hotelNameExistsAndNotSameHotel(hotelDTO.getName(), hotelDTO.getId())) {
            throw new EntityNotFoundException("This hotel name is already registered!");
        }
        existingHotel.setName(hotelDTO.getName());

        Address updateAddress = addressService.updateAddress(hotelDTO.getAddressDTO());
        existingHotel.setAddress(updateAddress);
        hotelDTO.getRoomDTOs().forEach(roomService::updateRoom); // add lần lượt room vào trong khách sạn bằng hàm updateRoom
        
        hotelResponsitory.save(existingHotel);
        return mapHotelToHotelDto(existingHotel);
    }

    @Override
    public void deleteHotel(Long id) {
        hotelResponsitory.deleteById(id);
    }

    @Override
    public List<Hotel> findAllHotelsByManagerId(Long managerId) {
        List<Hotel> hotels = hotelResponsitory.findAllByHotelManagerId(managerId);
        List<Hotel> result ;
        if (hotels !=null) {
            return result = hotels; // nếu danh sách hotel ko rỗng thì return
        }else{
            return result = Collections.emptyList(); // nếu rỗng thì trả về danh sách rỗng
        }
    }

    @Override
    public List<HotelDTO> findAllHotelDtosByManagerId(Long managerId) {
        List<Hotel> hotels = hotelResponsitory.findAllByHotelManagerId(managerId);
        if (hotels != null) {
            return hotels.stream().map(this::mapHotelToHotelDto).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    @Override
    public HotelDTO findHotelByIdAndManagerId(Long hotelId, Long managerId) {
        Hotel hotel = hotelResponsitory.findByIdAndHotelManagerId(hotelId, managerId).orElseThrow(()-> new EntityNotFoundException("Hotel not Found"));
        return mapHotelToHotelDto(hotel);
    }


    @Override
    @Transactional
    public HotelDTO updateHotelByManagerId(HotelDTO hotelDTO, Long managerId) {
        Hotel existingHotel = hotelResponsitory.findById(hotelDTO.getId()).orElseThrow(()-> new EntityNotFoundException("Hotel not found"));
        if (hotelNameExistsAndNotSameHotel(hotelDTO.getName(), hotelDTO.getId())) {
            throw new EntityNotFoundException("This hotel name is already registered!");
        }
        existingHotel.setName(hotelDTO.getName());
        Address updateAddress =  addressService.updateAddress(hotelDTO.getAddressDTO());
        existingHotel.setAddress(updateAddress);

        hotelDTO.getRoomDTOs().forEach(roomService::updateRoom);
        hotelResponsitory.save(existingHotel);
        return mapHotelToHotelDto(existingHotel);
    }

    @Override
    public void deleteHotelByIdAndManagerId(Long hotelId, Long managerID) {
        Hotel hotel = hotelResponsitory.findByIdAndHotelManagerId(hotelId, managerID).orElseThrow(()-> new EntityNotFoundException("Hotel not found"));
        hotelResponsitory.delete(hotel);
    }

    @Override
    public HotelDTO mapHotelToHotelDto(Hotel hotel) {
        List<RoomDTO> roomDTOs = hotel.getRooms().stream().map(roomService::mapRoomTRoomDto).collect(Collectors.toList());
        AddressDTO addressDTO = addressService.mapAddressToAddressDto(hotel.getAddress());
        return HotelDTO.builder()
                        .id(hotel.getId())
                        .name(hotel.getName())
                        .addressDTO(addressDTO)
                        .roomDTOs(roomDTOs)
                        .managerUsername(hotel.getHotelManager().getUser().getUsername())
                        .build();
    }

    // validate text nhap vao
    private String formatText(String text) {
        return StringUtils.capitalize(text.trim());
    }
    
    private Hotel mapHotelRegistrationDtoToHotel(HotelRegistrationDTO dto) {
        return Hotel.builder()
                .name(formatText(dto.getName()))
                .build();
    }

    // hàm kiểm tra xem tên khách sạn đã tồn tại chưa 
    private boolean hotelNameExistsAndNotSameHotel(String name, Long hotelId) {
        Optional<Hotel> existingHotelWithSameName = hotelResponsitory.findByName(name);
        return existingHotelWithSameName.isPresent() && !existingHotelWithSameName.get().getId().equals(hotelId);
    }

    
}
