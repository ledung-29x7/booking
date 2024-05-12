package Aptech.booking_hotel.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import Aptech.booking_hotel.model.enums.RoomType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Hotel hotel;

    @Enumerated(EnumType.STRING)
    private RoomType roomType;
    
    
    private int roomCount;

    
    private double pricePerNight;
    
    @OneToMany(mappedBy = "room",cascade = CascadeType.ALL,orphanRemoval = true)
    @Builder.Default
    private List<Availability> availabilities = new ArrayList<>();
    
    // @OneToMany(fetch = FetchType.LAZY, mappedBy = "room")
    // private List<RoomServiceModel> roomService;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
        name = "room_service",
        joinColumns = @JoinColumn(name="room_id"),
        inverseJoinColumns = @JoinColumn(name="service_id")
    )
    private List<Service> services;

    
    @OneToOne(cascade = CascadeType.ALL)
    private Image image;
    


    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", hotel='" + getHotel() + "'" +
            ", roomType='" + getRoomType() + "'" +
            ", roomNumber='" + getRoomCount() + "'" +
            ", pricePerNight='" + getPricePerNight() + "'" +
            ", image='" + getImage() + "'" +
            ", availabilities='" + getAvailabilities() + "'" +
            "}";
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Room room = (Room) o;
        return Objects.equals(id, room.id) && Objects.equals(hotel, room.hotel);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, hotel);
    }


}
