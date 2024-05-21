package Aptech.booking_hotel.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.Service;
import Aptech.booking_hotel.model.validate.RoomDTO;
import Aptech.booking_hotel.model.validate.ServiceDTO;
import Aptech.booking_hotel.responsitory.RoomResponsitory;
import Aptech.booking_hotel.responsitory.ServiceResponsitory;
import Aptech.booking_hotel.service.ServiceService;
import jakarta.persistence.EntityNotFoundException;
@org.springframework.stereotype.Service
public class ServiceServiceImpl implements ServiceService {
    private ServiceResponsitory serviceResponsitory;
    private RoomResponsitory roomResponsitory;

    @Autowired
    public ServiceServiceImpl(ServiceResponsitory serviceResponsitory,
                            RoomResponsitory roomResponsitory){
            this.serviceResponsitory=serviceResponsitory;
            this.roomResponsitory=roomResponsitory;
        }
    @Override
    public Service saveServiceToRoom(ServiceDTO serciceDTO, Room room) {
        Service service = mapServiceDtoToService(serciceDTO, room);
        service = serviceResponsitory.save(service);
        return service;
    }

    @Override
    public List<Service> saveServices(List<ServiceDTO> serviceDTOs, Room room) {
        List<Service> services = serviceDTOs.stream()
                                            .map(roomDTO -> saveServiceToRoom(roomDTO, room))
                                            .collect(Collectors.toList());
        return services;
    }

    @Override
    public Optional<Service> findServiceById(Long id) {
        return serviceResponsitory.findById(id);
    }

    @Override
    public Service updateService(ServiceDTO serviceDTO) {
        Service existingservice = serviceResponsitory.findById(serviceDTO.getId()).orElseThrow(()-> new EntityNotFoundException("Service not found"));

        existingservice.setName(serviceDTO.getName());
        Service updateService = serviceResponsitory.save(existingservice);
        return updateService;

    }   

    @Override
    public void deleteService(Long id) {
       serviceResponsitory.deleteById(id);
    }

    @Override
    public Service mapServiceDtoToService(ServiceDTO serviceDTO, Room room) {
        Service service = Service.builder()
                                
                                .name(serviceDTO.getName())
                                .build();
        return service;
    }

    @Override
    public ServiceDTO mapServiceToServiceDto(Service service) {
        return ServiceDTO.builder()
                        .id(service.getId())
                        .name(service.getName())
                        .build();
    }


    
}
