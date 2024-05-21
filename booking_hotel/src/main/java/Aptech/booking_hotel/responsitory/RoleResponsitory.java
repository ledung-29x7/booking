package Aptech.booking_hotel.responsitory;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Role;
import Aptech.booking_hotel.model.enums.RoleType;

@Repository
public interface RoleResponsitory extends JpaRepository<Role,Long> {
    Role findByRoleType(RoleType roleType);
}