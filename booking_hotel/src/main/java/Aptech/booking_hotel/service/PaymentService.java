package Aptech.booking_hotel.service;

import Aptech.booking_hotel.model.Booking;
import Aptech.booking_hotel.model.Payment;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;

public interface PaymentService {
    //Payment savePayment(Long bookingId, Double totalPrice, String paymentStatus, String paymentMethod, String currency);
    Payment savePayment(BookingInitiationDTO bookingInitiationDTO, Booking booking);
}
