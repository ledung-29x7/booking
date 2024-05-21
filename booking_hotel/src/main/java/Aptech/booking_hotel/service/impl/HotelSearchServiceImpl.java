package Aptech.booking_hotel.service.impl;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.model.enums.RoomType;
import Aptech.booking_hotel.model.validate.AddressDTO;
import Aptech.booking_hotel.model.validate.HotelAvailabilityDTO;
import Aptech.booking_hotel.model.validate.ImageDTO;
import Aptech.booking_hotel.model.validate.RoomDTO;
import Aptech.booking_hotel.responsitory.HotelResponsitory;
import Aptech.booking_hotel.service.AddressService;
import Aptech.booking_hotel.service.AvailabilityService;
import Aptech.booking_hotel.service.HotelSearchService;
import Aptech.booking_hotel.service.ImageService;
import Aptech.booking_hotel.service.RoomService;
import jakarta.persistence.EntityNotFoundException;
@Service
public class HotelSearchServiceImpl implements HotelSearchService {

    private HotelResponsitory hotelResponsitory;
    private AddressService addressService;
    private RoomService roomService;
    private AvailabilityService availabilityService;
    private ImageService imageService;

    @Autowired
    public HotelSearchServiceImpl(HotelResponsitory hotelResponsitory,
                                AddressService addressService,
                                RoomService roomService,
                                AvailabilityService availabilityService,
                                ImageService imageService
    ){
        this.hotelResponsitory= hotelResponsitory;
        this.addressService=addressService;
        this.roomService= roomService;
        this.availabilityService= availabilityService;
        this.imageService=imageService;
    }

    // kiểm tra xem ngày checkin có là ngày trong quá khứ hay không , ngày checkout phải sau ngày checkin
    private void validateCheckinAndCheckoutDates(LocalDate checkinDate, LocalDate checkoutDate){
        if (checkinDate.isBefore(LocalDate.now())) {
            throw new IllegalArgumentException("Check-in date cannot be in the past");
        }
        if (checkoutDate.isBefore(checkinDate.plusDays(1))) {
            throw new IllegalArgumentException("Check-out date must be after check-in date");
        }
    }

    @Override
    public HotelAvailabilityDTO mapHotelToHotelAvailabilityDto(Hotel hotel, LocalDate checkinDate,
            LocalDate checkoutDate) {
       List<RoomDTO> roomDTOs = hotel.getRooms().stream()
                                    .map(roomService::mapRoomTRoomDto) // chuyển đổi từ Room sang dạn đối tượng RoomDTO 
                                    .collect(Collectors.toList());
        List<ImageDTO> imageDTOs = hotel.getImages().stream()
                                    .map(imageService::mapImageToImageDto)
                                    .collect(Collectors.toList());
        // chuyển đổi địa chỉ sang dạng đối tượng AddressDTO
        AddressDTO addressDTO = addressService.mapAddressToAddressDto(hotel.getAddress());
        
        // tạo đối tượng HotelAvailabilityDTO bằng builder() và gán các thành phần của đối tượng
        HotelAvailabilityDTO hotelAvailabilityDTO = HotelAvailabilityDTO.builder()
                                                                        .id(hotel.getId())
                                                                        .name(hotel.getName())
                                                                        .addressDTO(addressDTO)
                                                                        .roomDTOs(roomDTOs)
                                                                        .imageDTOs(imageDTOs)
                                                                        .description(hotel.getDescription())
                                                                        .build();

        // kiểm tra số phòng đơn còn trống trả về dạng int
        int maxAvailableSingleRooms = hotel.getRooms().stream()
                                            .filter(room-> room.getRoomType() == RoomType.SINGLE) // lọc ra phòng đơn 
                                            .mapToInt(room -> availabilityService.getMinAvailableRooms(room.getId(), checkinDate, checkoutDate))
                                            .max()              // lấy giá trị lơn nhất 
                                            .orElse(0); // trả về 0 nếu không còn phòng đơn nào 
        hotelAvailabilityDTO.setMaxAvailableSingleRooms(maxAvailableSingleRooms);

        // kiểm tra số phòng đôi còn trống 
        int maxAvailableDoubleRooms = hotel.getRooms().stream()
                                            .filter(room ->room.getRoomType() == RoomType.DOUBLE)
                                            .mapToInt(room -> availabilityService.getMinAvailableRooms(room.getId(), checkinDate, checkoutDate))
                                            .max()
                                            .orElse(0);
        hotelAvailabilityDTO.setMaxAvailableDoubleRooms(maxAvailableDoubleRooms);

        // kiểm tra số phòng gia đình còn trống 
        int maxAvailableFamilyRooms = hotel.getRooms().stream()
                                            .filter(room -> room.getRoomType() == RoomType.FAMILY)
                                            .mapToInt(room -> availabilityService.getMinAvailableRooms(room.getId(), checkinDate, checkoutDate))
                                            .max()
                                            .orElse(0);
        hotelAvailabilityDTO.setMaxAvailableFamilyRooms(maxAvailableFamilyRooms);

        return hotelAvailabilityDTO;
    }

    // tìm tất cả các khách sạn có khả năng sẵn trong một thành phố và trong khoảng thời gian checkin checkout, sau đó trả về một danh sách 
    // đối tượng với thông tin về phòng trống của khách sạn
    @Override
    public List<HotelAvailabilityDTO> findAvailableHotelsByCityAndDate(String city, LocalDate checkinDate,
            LocalDate checkoutDate) {
        validateCheckinAndCheckoutDates(checkinDate, checkoutDate);
        // tính số ngày giữa ngày checkin và checkout
        Long numberOfDay = ChronoUnit.DAYS.between(checkinDate, checkoutDate);
        // tìm khách sạn có sẵn trong thành phố và khoảng ngày checkin checkout
        List<Hotel> hotelsWithAvailableRooms = hotelResponsitory.findHotelsWithAvailableRooms(city, checkinDate, checkoutDate, numberOfDay);
        //tìm khách sạn không có phòng trống nào trong khoảng thời gian 
        List<Hotel> hotelsWithoutAvailablityRecords = hotelResponsitory.findHotelsWithoutAvailabilityRecords(city, checkinDate, checkoutDate);
        //tìm khách sạn có số ngày trống một phần trong khoảng thời gian checkin, checkout ví dụ như khách đặt 3 ngày nhưng khách sạn chỉ có 2 ngày trống
        List<Hotel> hotelsWithPartialAvailabilityRecords = hotelResponsitory.findHotelsWithPartialAvailabilityRecords(city, checkinDate, checkoutDate, numberOfDay);
        
        // gộp tất cả 3 điều kiện trên vào 1 tập hợp
        Set<Hotel> combinedHotels = new HashSet<>(hotelsWithAvailableRooms); // tạo một tập hợp từ danh sách khách sạn có sẵn
        combinedHotels.addAll(hotelsWithoutAvailablityRecords); // thêm những khách sạn không còn phòng trống
        combinedHotels.addAll(hotelsWithPartialAvailabilityRecords); // thêm những khách sạn còn phòng trống nhưng ko đầy đủ thời gian lưu trú

        return combinedHotels.stream().map(hotel -> mapHotelToHotelAvailabilityDto(hotel, checkinDate, checkoutDate)).collect(Collectors.toList());

    }


    // tìm khách sạn có phòng trống trong khoảng thời gian checkin checkout bằng id khách sạn 
    @Override
    public HotelAvailabilityDTO findAvailableHotelById(Long hotelId, LocalDate checkinDate, LocalDate checkoutDate) {
        validateCheckinAndCheckoutDates(checkinDate, checkoutDate);

        Optional<Hotel> hotelOptional = hotelResponsitory.findById(hotelId);
        if (hotelOptional.isEmpty()) {
            throw new EntityNotFoundException("Hotel not found");
        }
        Hotel hotel = hotelOptional.get();
        return mapHotelToHotelAvailabilityDto(hotel, checkinDate, checkoutDate);
        // trả về giá trị của phương thức là đối tượng HotelAvailablityDTO
    }

   
}
