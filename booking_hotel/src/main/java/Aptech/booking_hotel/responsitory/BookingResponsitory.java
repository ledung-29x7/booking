package Aptech.booking_hotel.responsitory;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Booking;
@Repository
public interface BookingResponsitory extends JpaRepository<Booking,Long> {
    List<Booking> findBookingsByCustomerId(Long customerId);

    Optional<Booking> findBookingByIdAndCustomerId(Long bookingId, Long customerId);

    List<Booking> findBookingsByHotelId(Long hotelId);

    Optional<Booking> findBookingByIdAndHotel_HotelManagerId(Long bookingId, Long hotelManagerId);
}
