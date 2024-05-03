package Aptech.booking_hotel.responsitory;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Aptech.booking_hotel.model.Hotel;
@Repository
public interface HotelResponsitory extends JpaRepository<Hotel,Long> {
    Optional<Hotel> findByName(String name);

    List<Hotel> findAllByHotelManagerId(Long id);

    Optional<Hotel> findByIdAndHotelManagerId(Long id, long managerId);

    // do khong tao dc procedure nen viet tam query
    // truy van hotle voi dieu kien la nhap vao city trung voi city hotel
    @Query("Select h from Hotel h where h.address.city = :city")
    List<Hotel> findHotelsByCity(@Param("city") String city);

    // @Query(
    //     "select h "+
    //     "from Hotel h " +
    //     "join h.rooms r " +
    //     "left join Availability a On a.room.id = r.id " +
    //     "and a.date >= :checkinDate AND a.date < :checkoutDate " +
    //     "where h.address.city = :city " +
    //     "and (a IS NULL OR a.availableRooms > 0)" +
    //     "group by h.id, r.id "+
    //     "having COUNT(DISTINT a.date) + SUM(CASE WHEN a IS NULL THEN 1 ELSE 0 END) = :numberOfDays"
    //     )
    //     List<Hotel> findHotelsWithAvailableRooms(@Param("city") String city,
    //                                              @Param("checkinDate") LocalDate checkinDate,
    //                                              @Param("checkoutDate") LocalDate checkoutDate,
    //                                              @Param("numberOfDays") Long numberOfDays);

    // @Query(
    //     "select h " +
    //     "where h.address.city = :city " +
    //     "AND NOT EXIST " +
    //     "  ( select 1 from Availability a where a.room.hotel.id = h.id and a.date >= :checkinDate AND a.date < :checkoutDate )")
    //     List<Hotel> findHotelsWithoutAvailabilityRecords(@Param("city") String city,
    //                                                     @Param("checkinDate") LocalDate checkinDate,
    //                                                     @Param("checkoutDate") LocalDate checkoutDate,
    //                                                     @Param("numberOfDays") Long numberOfDays);
    // @Query(
    //     "SELECT h FROM Hotel h JOIN h.room r LEFT JOIN Availability a ON r.id = a.room.id " +
    //     "AND a.date >= :checkinDate AND a.date < :checkoutDate " +
    //     "WHERE h.address.city = :city " +
    //     "AND (a IS NULL OR a.availableRooms > 0) "+
    //     "GROUP BY h.id" + 
    //     "HAVING COUNT(DISTINCT CASE WHEN a.availableRooms > 0 THEM a.date END) > 0")
    //     List<Hotel> findHotelsWithPartialAvailabilityRecords(@Param("city") String city,
    //                                                         @Param("checkinDate") LocalDate checkinDate,
    //                                                         @Param("checkoutDate") LocalDate checkoutDate,
    //                                                         @Param("numberOfDays") Long numberOfDays);


    @Query("SELECT h " +
    "FROM Hotel h " +
    "JOIN h.rooms r " +
    "LEFT JOIN Availability a ON a.room.id = r.id " +
    "AND a.date >= :checkinDate AND a.date < :checkoutDate " +
    "WHERE h.address.city = :city " +
    "AND (a IS NULL OR a.availableRooms > 0) " +
    "GROUP BY h.id, r.id " +
    "HAVING COUNT(DISTINCT a.date) + SUM(CASE WHEN a IS NULL THEN 1 ELSE 0 END) = :numberOfDays")
    List<Hotel> findHotelsWithAvailableRooms(@Param("city") String city,
                                     @Param("checkinDate") LocalDate checkinDate,
                                     @Param("checkoutDate") LocalDate checkoutDate,
                                     @Param("numberOfDays") Long numberOfDays);

     @Query("SELECT h " +
     "FROM Hotel h " +
     "WHERE h.address.city = :city " +
     "AND NOT EXISTS (" +
     "   SELECT 1 " +
     "   FROM Availability a " +
     "   WHERE a.room.hotel.id = h.id " +
     "   AND a.date >= :checkinDate AND a.date < :checkoutDate" +
     ")")
     List<Hotel> findHotelsWithoutAvailabilityRecords(@Param("city") String city,
                                                      @Param("checkinDate") LocalDate checkinDate,
                                                      @Param("checkoutDate") LocalDate checkoutDate);
                         
     @Query("SELECT h " +
             "FROM Hotel h " +
             "JOIN h.rooms r " +
             "LEFT JOIN Availability a ON r.id = a.room.id " +
             "AND a.date >= :checkinDate AND a.date < :checkoutDate " +
             "WHERE h.address.city = :city " +
             "AND (a IS NULL OR a.availableRooms > 0) " +
             "GROUP BY h.id " +
             "HAVING COUNT(DISTINCT a.date) < :numberOfDays " +
             "AND COUNT(DISTINCT CASE WHEN a.availableRooms > 0 THEN a.date END) > 0")
    List<Hotel> findHotelsWithPartialAvailabilityRecords(@Param("city") String city,
                                                         @Param("checkinDate") LocalDate checkinDate,
                                                         @Param("checkoutDate") LocalDate checkoutDate,
                                                         @Param("numberOfDays") Long numberOfDays);
}
