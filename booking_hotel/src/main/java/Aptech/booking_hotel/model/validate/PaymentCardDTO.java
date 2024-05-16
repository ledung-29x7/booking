package Aptech.booking_hotel.model.validate;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentCardDTO {
    @NotBlank(message = "Cardholder name cannot be empty")
    @Pattern(regexp = "^[a-zA-Z\\s]*$", message = "Cardholder name must contain only letters and spaces")
    @Size(min = 3, max = 50, message = "Cardholder name should be between 3 and 50 characters")
    private String cardholderName;

    @Size(min = 16, max = 16 , message = "Invalid credit card number")
    // @CreditCardNumber(message = "Invalid credit card number")
    private String cardNumber;
    
    private String expirationDate;

    @Pattern(regexp = "^\\d{3}$", message = "CVC must be 3 digits")
    private String cvc;
}
