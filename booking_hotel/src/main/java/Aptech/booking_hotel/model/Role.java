package Aptech.booking_hotel.model;

import java.util.Objects;

import Aptech.booking_hotel.model.enums.RoleType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private RoleType roleType;

    // tiêm roleType bên enum vào đây . khi thay đổi bên enum bên này ít bị ảnh hưởng
    public Role(RoleType roleType){ 
        this.roleType=roleType;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", roleType='" + getRoleType() + "'" +
            "}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Role role = (Role) o;
        return Objects.equals(id, role.id) && roleType == role.roleType;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roleType);
    }
}
