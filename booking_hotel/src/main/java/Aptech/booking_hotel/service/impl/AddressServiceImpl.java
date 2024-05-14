package Aptech.booking_hotel.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import Aptech.booking_hotel.model.Address;
import Aptech.booking_hotel.model.validate.AddressDTO;
import Aptech.booking_hotel.responsitory.AddressResponsitory;
import Aptech.booking_hotel.service.AddressService;
import jakarta.persistence.EntityNotFoundException;
@Service
public class AddressServiceImpl implements AddressService {

    private AddressResponsitory addressResponsitory;
    @Autowired
    public AddressServiceImpl (AddressResponsitory addressResponsitory){
        this.addressResponsitory=addressResponsitory;
    }

    @Override
    public Address saveAddress(AddressDTO addressDTO) {
        Address address = mapAddressDtoToAddress(addressDTO); 
        Address savedAddress = addressResponsitory.save(address);
        return savedAddress; 
    }

    @Override
    public AddressDTO findAddressById(Long id) {
        Address address = addressResponsitory.findById(id).orElseThrow(()-> new EntityNotFoundException("Address not found"));
        return mapAddressToAddressDto(address);
    }

    @Override
    public Address updateAddress(AddressDTO addressDTO) {
        // lấy địa chỉ cũ qua id
        Address existingAddress = addressResponsitory.findById(addressDTO.getId()).orElseThrow(()->new EntityNotFoundException("Address not found"));
       // thêm thay địa chỉ mới 
        setFormattedDataToAddress(existingAddress, addressDTO);
        Address updateAddress = addressResponsitory.save(existingAddress);
        return updateAddress;
    }

    @Override
    public void deleteAddress(Long id) {
        if (!addressResponsitory.existsById(id)) {
            throw new EntityNotFoundException("Address not found");
        }
        addressResponsitory.deleteById(id);
    }

    @Override
    public Address mapAddressDtoToAddress(AddressDTO dto) {
        return Address.builder()
                        .addressLine(formatText(dto.getAddressLine()))
                        .district(formatText(dto.getDistrict()))
                        .city(formatText(dto.getCity()))
                        .country(formatText(dto.getCountry()))
                        .build();
    }

    @Override
    public AddressDTO mapAddressToAddressDto(Address address) {
        return AddressDTO.builder()
                        .id(address.getId())
                        .addressLine(address.getAddressLine())
                        .district(address.getDistrict())
                        .city(address.getCity())
                        .country(address.getCountry())
                        .build();
    }

    // format text nhập vào
    private String formatText(String text) {
        return StringUtils.capitalize(text.trim());
    }

    // form nhập vào
    private void setFormattedDataToAddress(Address address, AddressDTO addressDTO) {
        address.setAddressLine(formatText(addressDTO.getAddressLine()));
        address.setDistrict(formatText(addressDTO.getDistrict()));
        address.setCity(formatText(addressDTO.getCity()));
        address.setCountry(formatText(addressDTO.getCountry()));
    }
    
}
