package Aptech.booking_hotel.util;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.servlet.http.HttpServletRequest;
@Component
public class JwtTokenUtil {
    private String secretKey = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";
    private long expirationTime = 3600000; // thời hạn của JWT 1h

    private Set<String> invalidatedTokens = new HashSet<>();

    // tạo ra token
    public String generateToken(String username, String role){
        return Jwts.builder()
                    .setSubject(username)
                    .claim("role", role)
                    .claim("username", username)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis()+expirationTime))
                    .signWith(SignatureAlgorithm.HS256, secretKey)
                    .compact();
    }

    // lấy ra claims(username, role ) từ token
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

    // xem token có hợp lệ hay không
    public boolean isTokenValid(String token) {
        try {
            getClaimsFromToken(token); // Xem token có hợp lệ không
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // lấy username từ token
    public String getUsernameFromToken(String token) {
        return getClaimsFromToken(token).getSubject();
    }

    // lấy role user từ token
    public String getRoleFromToken(String token) {
        return getClaimsFromToken(token).get("role", String.class);
    }

    // lấy chuổi JWT từ request
    public static String extractJwtFromRequest(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");
        
        // Kiểm tra xem header có null hay không và có bắt đầu bằng "Bearer " không
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            // Trả về JWT sau khi loại bỏ phần "Bearer "
            return authorizationHeader.substring(7);
        }
        
        // Trả về null nếu không tìm thấy JWT trong header
        return null;
    }

    public void invalidateToken(String token) {
        invalidatedTokens.add(token); // Thêm token vào danh sách các token bị hủy
    }


}
