package Aptech.booking_hotel.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.FilterType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    
    // @OneToMany(fetch = FetchType.LAZY, mappedBy = "service")
    // private List<RoomServiceModel> roomService;
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
        name = "room_service",
        joinColumns = @JoinColumn(name="service_id"),
        inverseJoinColumns = @JoinColumn(name="room_id")
    )
    private List<Room> rooms = new ArrayList<>();
}
