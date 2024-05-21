package Aptech.booking_hotel.service.impl;

import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Booking;
import Aptech.booking_hotel.model.Payment;
import Aptech.booking_hotel.model.enums.Currency;
import Aptech.booking_hotel.model.enums.PaymentMethod;
import Aptech.booking_hotel.model.enums.PaymentStatus;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;
import Aptech.booking_hotel.responsitory.PaymentResponsitory;
import Aptech.booking_hotel.service.PaymentService;
@Service
public class PaymentServiceImpl implements PaymentService {
    private PaymentResponsitory paymentResponsitory;
    public PaymentServiceImpl(PaymentResponsitory paymentResponsitory){
        this.paymentResponsitory= paymentResponsitory;
    }
    // @Override
    // public Payment savePayment(Long bookingId, Double totalPrice, String paymentStatus, String paymentMethod,
    //         String currency) {
    //     return paymentResponsitory.savePayment(bookingId, totalPrice, paymentStatus, paymentMethod, currency);
    // }
    @Override
    public Payment savePayment(BookingInitiationDTO bookingInitiationDTO, Booking booking) {
        Payment payment = Payment.builder()
                                .booking(booking)
                                .amount(bookingInitiationDTO.getAmount())
                                .paymentMethod(PaymentMethod.VNPAY)
                                .paymentStatus(PaymentStatus.PENDING)
                                .currency(Currency.VND)
                                .build();
        return paymentResponsitory.save(payment);
    }
    
}
