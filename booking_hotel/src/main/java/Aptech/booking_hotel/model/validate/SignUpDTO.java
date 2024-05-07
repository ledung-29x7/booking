package Aptech.booking_hotel.model.validate;

import lombok.Data;

@Data
public class SignUpDTO {
    private String username;
    private String firstname;
    private String lastname;
    private String phone;
    private String password;
}
