package Aptech.booking_hotel.model.validate;

import java.util.ArrayList;
import java.util.List;

import Aptech.booking_hotel.model.Service;

public class ServiceDTO {
    private Long id;
    private String name;
    private List<Service> services = new ArrayList<>();
}
