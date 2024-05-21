package Aptech.booking_hotel.service;

import Aptech.booking_hotel.model.Address;
import Aptech.booking_hotel.model.validate.AddressDTO;

public interface AddressService {
    Address saveAddress (AddressDTO addressDTO);

    AddressDTO findAddressById(Long id);
    Address updateAddress(AddressDTO addressDTO);
    void deleteAddress(Long id);
    Address mapAddressDtoToAddress(AddressDTO dto);
    AddressDTO mapAddressToAddressDto(Address address);
}
