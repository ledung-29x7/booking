package Aptech.booking_hotel.model.validate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResetPasswordDTO {
    @NotBlank(message = "Password cannot be Empty")
    @Size(min=6, max=20,message="Password must be between 6 to 20 charecters")
    private String oldPassword;
    @NotBlank(message = "Password cannot be Empty")
    @Size(min=6, max=20,message="Password must be between 6 to 20 charecters")
    private String newPassword;
    @NotBlank(message = "Password cannot be Empty")
    @Size(min=6, max=20,message="Password must be between 6 to 20 charecters")
    private String confirmNewPassword;
}
