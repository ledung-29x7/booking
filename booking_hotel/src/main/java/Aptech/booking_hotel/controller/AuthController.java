package Aptech.booking_hotel.controller;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.model.Role;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.enums.RoleType;
import Aptech.booking_hotel.model.validate.LoginDTO;
import Aptech.booking_hotel.model.validate.UserRegistrationDTO;
import Aptech.booking_hotel.responsitory.RoleResponsitory;
import Aptech.booking_hotel.responsitory.UserResponsitory;


@RestController
@RequestMapping("/customer")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserResponsitory userResponsitory;
    private RoleResponsitory roleResponsitory;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(
                            AuthenticationManager authenticationManager,
                            UserResponsitory userResponsitory,
                            RoleResponsitory roleResponsitory,
                            PasswordEncoder passwordEncoder){
        
        this.authenticationManager = authenticationManager;
        this.userResponsitory=userResponsitory;
        this.roleResponsitory=roleResponsitory;
        this.passwordEncoder=passwordEncoder;
    }

    @PostMapping("/sigin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDTO loginDTO){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("User signed-in successfully!", HttpStatus.OK);
    }

    @PostMapping("/sigup")
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