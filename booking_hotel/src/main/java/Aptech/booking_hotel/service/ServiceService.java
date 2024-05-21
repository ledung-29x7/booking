package Aptech.booking_hotel.service;

import java.util.List;
import java.util.Optional;

import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.Service;
import Aptech.booking_hotel.model.validate.RoomDTO;
import Aptech.booking_hotel.model.validate.ServiceDTO;

public interface ServiceService {
    Service saveServiceToRoom (ServiceDTO serciceDTO, Room room);
    List<Service> saveServices(List<ServiceDTO> serviceDTOs, Room room);
    Optional<Service> findServiceById (Long id);
    Service updateService(ServiceDTO serviceDTO);
    void deleteService (Long id);
    Service mapServiceDtoToService(ServiceDTO serviceDTO, Room room);
    ServiceDTO mapServiceToServiceDto(Service service);
    

    
}