package Aptech.booking_hotel.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Availability;
import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.enums.RoomType;
import Aptech.booking_hotel.model.validate.RoomSelectionDTO;
import Aptech.booking_hotel.responsitory.AvailabilityResponsitory;
import Aptech.booking_hotel.service.AvailabilityService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.RoomService;
import jakarta.persistence.EntityNotFoundException;
@Service
public class AvailabilityServiceImpl implements AvailabilityService{

    private AvailabilityResponsitory availabilityResponsitory;
    private HotelService hotelService;
    private RoomService roomService;

    @Autowired
    public AvailabilityServiceImpl(AvailabilityResponsitory availabilityResponsitory,HotelService hotelService, RoomService roomService){
        this.availabilityResponsitory= availabilityResponsitory;
        this.hotelService=hotelService;
        this.roomService= roomService;
    }


    @Override 
    public Integer getMinAvailableRooms(Long id, LocalDate checkinDate, LocalDate checkoutDate) {
        Room room = roomService.findRoomById(id).orElseThrow(()-> new EntityNotFoundException("Roome not found"));
        // lấy số lượng phòng còn trống trong khoảng thời gian checkin, checkout
        return availabilityResponsitory.getMinAvailableRooms(id, checkinDate, checkoutDate).orElse(room.getRoomCount());

    }

    // Rất quan trọng 
    @Override // cập nhật tình trạng phòng trống trong khoảng thời gian khách checkin checkout
    public void updateAvailabilities(Long hotelId, 
                                    LocalDate checkinDate, LocalDate checkoutDate,
                                    List<RoomSelectionDTO> roomSelections) {
        Hotel hotel = hotelService.findHotelById(hotelId).orElseThrow(()-> new EntityNotFoundException("Hotel not found"));
        
        roomSelections = roomSelections.stream()
                                        .filter(roomSelection->roomSelection.getCount()>0) // lọc những phòng trống ra lưu vào danh sách mới 
                                        .collect(Collectors.toList());
        
        // vòng lặp qua các lựa chọn phòng .ở đây roomSelections là danh sách các lựa chọn phòng
        for (RoomSelectionDTO roomSelection : roomSelections) {
            RoomType roomType = roomSelection.getRoomType(); // lấy ra loại phòng
            int selectedCount = roomSelection.getCount(); // lấy ra số lượng phòng đã chọn

            // tìm phòng theo loại phòng đã lấy ở trên của 1 khách sạn
            Room room = hotel.getRooms().stream() // lấy danh sách phòng của khách sạn
                            .filter(r -> r.getRoomType() == roomType) // lọc danh sách đấy lấy những phòng có kiểu phòng như trên
                            .findFirst()                                // lấy phần tử đầu tiên để kiểm tra xem còn phòng hay không 
                            .orElseThrow(()-> new EntityNotFoundException("Room type not found")); // nếu không thì bắn ra exception
            
            // vòng lặp qua các ngày từ ngày checkin đến ngày checkout với bước nhảy là 1 ngày 
            for(LocalDate date = checkinDate; 
                date.isBefore(checkoutDate);
                date = date.plusDays(1)
                ){
                    LocalDate currentDate = date; 
                    Availability availability = availabilityResponsitory.findByRoomIdAndDate(room.getId(), date) // tìm phòng trống cho ngày cụ thể
                                                                        .orElseGet(()-> Availability.builder() // nếu không tìm thấy sẽ tạo ra phòng trống mới 
                                                                                                    .hotel(hotel)
                                                                                                    .date(currentDate)
                                                                                                    .room(room)
                                                                                                    .availableRooms(room.getRoomCount()) //với số lượng phòng trống có sẵn
                                                                                                    .build());
                                                                        // findByRoomIdAndDate để tìm và orElseGet() để tạo mới nếu cần
                    // tự động giảm số phòng có sẵn theo số lượng đã đặt
                    int updatedAvailableRooms = availability.getAvailableRooms() - selectedCount; // số lượng phòng hiện tại bằng tổng số phòng - số phòng đã đặt
                    if (updatedAvailableRooms<0) { // nếu số lượng phòng trống nhỏ hơn 0 thì in ra exception
                        throw new IllegalArgumentException("Selected rooms excced available rooms for date"+ currentDate);
                    }
                    availability.setAvailableRooms(updatedAvailableRooms); // ngược lại nếu đủ thì cập nhật giá trị mới 
                    availabilityResponsitory.save(availability);  // lưu xuống cơ sở dữ liệu
                }
        }

    }
    
}
