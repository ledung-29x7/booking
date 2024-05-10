package Aptech.booking_hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import Aptech.booking_hotel.model.LoginResponse;
import Aptech.booking_hotel.model.Role;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.enums.RoleType;
import Aptech.booking_hotel.model.validate.LoginDTO;
import Aptech.booking_hotel.model.validate.UserRegistrationDTO;
import Aptech.booking_hotel.responsitory.RoleResponsitory;
import Aptech.booking_hotel.responsitory.UserResponsitory;
import Aptech.booking_hotel.service.AuthenticationService;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    
    private UserResponsitory userResponsitory;
    private RoleResponsitory roleResponsitory;
    private PasswordEncoder passwordEncoder;
    private AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(
                            UserResponsitory userResponsitory,
                            RoleResponsitory roleResponsitory,
                            PasswordEncoder passwordEncoder,
                            AuthenticationService authenticationService){
        this.authenticationService=authenticationService;
        this.userResponsitory=userResponsitory;
        this.roleResponsitory=roleResponsitory;
        this.passwordEncoder=passwordEncoder;
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        try {
            String token = authenticationService.authenticate(loginDTO.getUsername(), loginDTO.getPassword());
            return ResponseEntity.ok(new LoginResponse(token));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser (@RequestBody UserRegistrationDTO userRegistrationDTO){
        // kiểm tra xem username đã tồn tại hay chưa
        if (userResponsitory.existsByUsername(userRegistrationDTO.getUsername())) {
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }
        //đăng ký user mới
        User user = new User();
        user.setUsername(userRegistrationDTO.getUsername());
        user.setFirstName(userRegistrationDTO.getFirstName());
        user.setLastName(userRegistrationDTO.getLastName());
        user.setPhone(userRegistrationDTO.getPhone());
        user.setPassword(passwordEncoder.encode(userRegistrationDTO.getPassword())); // mã hòa mật khẩu
        Role roles = roleResponsitory.findByRoleType(RoleType.CUSTOMER);
        user.setRole(roles);
        userResponsitory.save(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }
}
