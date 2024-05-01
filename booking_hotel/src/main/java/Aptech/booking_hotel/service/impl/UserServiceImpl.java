package Aptech.booking_hotel.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Customer;
import Aptech.booking_hotel.model.HotelManager;
import Aptech.booking_hotel.model.Role;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.enums.RoleType;
import Aptech.booking_hotel.model.validate.ResetPasswordDTO;
import Aptech.booking_hotel.model.validate.UserDTO;
import Aptech.booking_hotel.model.validate.UserRegistrationDTO;
import Aptech.booking_hotel.responsitory.CustomerResponsitory;
import Aptech.booking_hotel.responsitory.HotelManagerResponsitory;
import Aptech.booking_hotel.responsitory.RoleResponsitory;
import Aptech.booking_hotel.responsitory.UserResponsitory;
import Aptech.booking_hotel.service.UserService;
@Service
public class UserServiceImpl implements UserService  {

    private UserResponsitory userResponsitory;
    private RoleResponsitory roleResponsitory;
    private CustomerResponsitory customerResponsitory;
    private HotelManagerResponsitory hotelManagerResponsitory;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(
        UserResponsitory userResponsitory,
        RoleResponsitory roleResponsitory,
        CustomerResponsitory customerResponsitory,
        HotelManagerResponsitory hotelManagerResponsitory,
        PasswordEncoder passwordEncoder){
            this.userResponsitory=userResponsitory;
            this.roleResponsitory=roleResponsitory;
            this.customerResponsitory=customerResponsitory;
            this.hotelManagerResponsitory=hotelManagerResponsitory;
            this.passwordEncoder=passwordEncoder;
        }

    @Override
    public User saveUser(UserRegistrationDTO registrationDTO) {
       Optional<User> existingUser = Optional.ofNullable(userResponsitory.findByUsername(registrationDTO.getUsername()));

       // kiem tra xem ten nguoi dung da dc dang ky hay chua
       if (existingUser.isPresent()) {
        throw new UsernameNotFoundException("This username is already registered!");
       }
       User user = mapRegistrationDtoToUser(registrationDTO);
       if (RoleType.CUSTOMER.equals(registrationDTO.getRoleType())) {
            Customer customer = Customer.builder().user(user).build();
            customerResponsitory.save(customer);
       }else if (RoleType.MANAGER.equals(registrationDTO.getRoleType())) {
        HotelManager hotelManager = HotelManager.builder().user(user).build();
        hotelManagerResponsitory.save(hotelManager);
       }

       User saveUser= userResponsitory.save(user);
       return saveUser;
    }

    // gom RegistrasionDTO với User
    private User mapRegistrationDtoToUser(UserRegistrationDTO registrationDTO) {
        Role userRole = roleResponsitory.findByRoleType(registrationDTO.getRoleType());
        return User.builder()
                .username(registrationDTO.getUsername().trim())
                .password(passwordEncoder.encode(registrationDTO.getPassword()))
                .firstName(formatText(registrationDTO.getFirstName()))
                .lastName(formatText(registrationDTO.getLastName()))
                .role(userRole)
                .build();
    }
    private String formatText(String text){
        return org.springframework.util.StringUtils.capitalize(text.trim());
    }
    @Override
    public User findUserByUsername(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUserByUsername'");
    }

    @Override
    public UserDTO findUserDTOByUsername(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUserDTOByUsername'");
    }

    @Override
    public UserDTO findUserById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findUserById'");
    }

    @Override
    public List<UserDTO> findAllUsers() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllUsers'");
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void updateLoggedById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateLoggedById'");
    }

    @Override
    public void deleteUserById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUserById'");
    }

    @Override
    public User resetPassword(ResetPasswordDTO resetPasswordDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'resetPassword'");
    }
    
}
