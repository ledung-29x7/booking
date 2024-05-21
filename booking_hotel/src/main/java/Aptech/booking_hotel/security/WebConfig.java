package Aptech.booking_hotel.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override 
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Tất cả các điểm cuối
                .allowedOrigins("http://localhost:3000")  // Nguồn gốc của máy chủ phát triển React
                .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH")  // Các phương thức HTTP được phép
                .allowedHeaders("*")  // Cho phép tất cả các tiêu đề
                .allowCredentials(true);  // Cho phép cookie nếu cần
    }
}
