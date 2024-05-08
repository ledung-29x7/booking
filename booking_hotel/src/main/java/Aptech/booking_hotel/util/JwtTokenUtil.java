package Aptech.booking_hotel.util;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
@Component
public class JwtTokenUtil {
    private String secretKey = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";
    private long expirationTime = 3600000; // thời hạn của JWT 1h

    public String generateToken(String username, String role){
        return Jwts.builder()
                    .setSubject(username)
                    .claim("role", role)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis()+expirationTime))
                    .signWith(SignatureAlgorithm.HS256, secretKey)
                    .compact();
    }
    public Claims getClaimsFromToken(String token) {
        try {
            return Jwts.parser()
                       .setSigningKey(secretKey)
                       .build()
                       .parseSignedClaims(token)
                       .getPayload();
        } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException e) {
            throw new RuntimeException("Token is invalid", e);
        }
    }
    public boolean isTokenValid(String token) {
        try {
            getClaimsFromToken(token); // Xem token có hợp lệ không
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    public String getRoleFromToken(String token) {
        return getClaimsFromToken(token).get("role", String.class);
    }
}
