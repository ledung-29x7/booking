package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import Aptech.booking_hotel.model.Role;

public interface RoleResponsitory extends JpaRepository<Role,Long> {
    
}
