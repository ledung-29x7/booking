package Aptech.booking_hotel.model.validate;

import java.util.ArrayList;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class HotelRegistrationDTO {
    @NotBlank(message = "Hotel name cannot be empty")
    @Pattern(regexp = "^(?!\\\\s*$)[a-zA-ZàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ ]+$", message = "Hotel name must only contain letters and numbers")
    private String name;

    @Valid
    private AddressDTO addressDTO;


    @Valid
    private List<RoomDTO> roomDTOs = new ArrayList<>();
}
