package Aptech.booking_hotel.service;

import java.util.List;

import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.validate.ResetPasswordDTO;
import Aptech.booking_hotel.model.validate.UserDTO;
import Aptech.booking_hotel.model.validate.UserRegistrationDTO;

public interface UserService {

    // thông qua validate user lưu thông tin user xuống csdl
    User saveUser(UserRegistrationDTO registrationDTO);

    // đăng ký
    User findUserByUsername(String username);

    UserDTO findUserDTOByUsername(String username);

    // lấy người dùng qua ID
    UserDTO findUserById(Long id);

    // lấy tất cả người dùng
    List<UserDTO> findAllUsers();

    //update người dùng
    void updateUser(UserDTO userDTO);


    void updateLoggedById(Long id);

    // xóa người dùng bằng id
    void deleteUserById(Long id);

    // đổi mật khẩu
    User resetPassword(ResetPasswordDTO resetPasswordDTO);
}
