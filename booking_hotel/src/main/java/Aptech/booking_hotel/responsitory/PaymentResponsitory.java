package Aptech.booking_hotel.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Payment;
@Repository
public interface PaymentResponsitory extends JpaRepository<Payment,Long> {

    // @Query(value = "CALL SavePayment(:bookingId, :totalPrice, :paymentStatus, :paymentMethod, :currency);", nativeQuery = true)
    // Payment savePayment(@Param("bookingId") Long bookingId,
    //                     @Param("totalPrice") Double totalPrice,
    //                     @Param("paymentStatus") String paymentStatus,
    //                     @Param("paymentMethod") String paymentMethod,
    //                     @Param("currency") String currency);
}
