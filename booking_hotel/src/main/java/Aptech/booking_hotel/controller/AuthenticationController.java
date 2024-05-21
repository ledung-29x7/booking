package Aptech.booking_hotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import Aptech.booking_hotel.model.Customer;
import Aptech.booking_hotel.model.LoginResponse;
import Aptech.booking_hotel.model.Role;
import Aptech.booking_hotel.model.User;
import Aptech.booking_hotel.model.enums.RoleType;
import Aptech.booking_hotel.model.validate.LoginDTO;
import Aptech.booking_hotel.model.validate.UserRegistrationDTO;
import Aptech.booking_hotel.responsitory.CustomerResponsitory;
import Aptech.booking_hotel.responsitory.RoleResponsitory;
import Aptech.booking_hotel.responsitory.UserResponsitory;
import Aptech.booking_hotel.service.AuthenticationService;
import Aptech.booking_hotel.util.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;

@RestController

@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private RoleResponsitory roleResponsitory;

    @Autowired
    private UserResponsitory userResponsitory;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired 
    private HttpServletRequest request;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    CustomerResponsitory customerResponsitory;



    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        try {
            String token = authenticationService.authenticate(loginDTO.getUsername(), loginDTO.getPassword());
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            User user = userResponsitory.findByUsername(loginDTO.getUsername());
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
    
            // Lấy vai trò của người dùng
            String role = user.getRole().getRoleType().name();
            
            return ResponseEntity.ok(new LoginResponse(token,role));
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
        Customer customer = new Customer();
        customer.setId(user.getId());
        customer.setUser(user);
        customerResponsitory.save(customer);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        String authToken = request.getHeader("Authorization");
        if (authToken != null && authToken.startsWith("Bearer ")) {
            String token = authToken.substring(7);
            // vô hiệu hóa toker
            jwtTokenUtil.isTokenValid(token);
            return ResponseEntity.ok("Logout successful");
        }
        return ResponseEntity.badRequest().body("Invalid token");
    }
}
