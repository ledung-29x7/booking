package Aptech.booking_hotel.controller;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Aptech.booking_hotel.model.Booking;
import Aptech.booking_hotel.model.Customer;
import Aptech.booking_hotel.model.validate.BookingDTO;
import Aptech.booking_hotel.model.validate.BookingInitiationDTO;
import Aptech.booking_hotel.model.validate.HotelDTO;
import Aptech.booking_hotel.model.validate.PaymentCardDTO;
import Aptech.booking_hotel.model.validate.UserDTO;
import Aptech.booking_hotel.service.BookingService;
import Aptech.booking_hotel.service.CustomerService;
import Aptech.booking_hotel.service.HotelService;
import Aptech.booking_hotel.service.UserService;
import Aptech.booking_hotel.service.VNPayService;
import Aptech.booking_hotel.util.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/booking")
public class BookingController {
    private HotelService hotelService;
    private UserService userService;
    private BookingService bookingService;
    private JwtTokenUtil jwtTokenUtil;
    private HttpServletRequest request;
    private CustomerService customerService;
    private VNPayService vnPayService;

    @Autowired
    public BookingController(HotelService hotelService,
                            UserService userService,
                            BookingService bookingService,
                            JwtTokenUtil jwtTokenUtil,
                            HttpServletRequest request,
                            CustomerService customerService,
                            VNPayService vnPayService){
        this.hotelService= hotelService;
        this.bookingService= bookingService;
        this.userService= userService;
        this.jwtTokenUtil=jwtTokenUtil;
        this.request=request;
        this.customerService=customerService;
        this.vnPayService=vnPayService;
        }
    

    // đặt phòng 
    // nhập hotelId, checkinDate, checkoutDate,totalPrice,durationDays
    
    // lấy thông tin khách sạn bằng id
    @GetMapping("/hotel/{hotelID}")
    public ResponseEntity<HotelDTO> getHotelInfor(@PathVariable Long hotelID){
        HotelDTO hotelDTO = hotelService.findHotelDtoById(hotelID);
        if (hotelDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // không tìm thấy khách sạn
        }
        return ResponseEntity.ok(hotelDTO);
    }
// thanh toan VNPay
        @PostMapping("/submitOrder")
    public Map<String, String> submitOrder(
                                           @RequestParam("orderInfo") String orderInfo,
                                           HttpSession session,
                                           Booking booking,
                                           HttpServletRequest request) {
        BookingInitiationDTO bookingInitiationDTO = (BookingInitiationDTO) session.getAttribute("bookingInitiationDTO");
        double orderTotal = bookingInitiationDTO.getAmount();
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(orderTotal, orderInfo, baseUrl);

        Map<String, String> response = new HashMap<>();
        response.put("redirectUrl", vnpayUrl);
        return response;
    }

    @GetMapping("/vnpay-payment")
    public Map<String, Object> getPaymentResult(HttpServletRequest request, HttpSession session, Booking booking) {
        BookingInitiationDTO bookingInitiationDTO = (BookingInitiationDTO) session.getAttribute("bookingInitiationDTO");
        int paymentStatus = vnPayService.orderReturn(request, bookingInitiationDTO, booking);
        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", orderInfo);
        response.put("totalPrice", totalPrice);
        response.put("paymentTime", paymentTime);
        response.put("transactionId", transactionId);
        response.put("paymentStatus", paymentStatus == 1 ? "success" : "fail");

        if (paymentStatus != 1) {
            
            response.put("redirectUrl", "/retry-payment"); // URL for retrying payment
        }
        return response;
    }

    @GetMapping("/retry-payment")
    public String retryPayment() {
        // Logic to display the retry payment page
        return "Please try again to make the payment.";
    }
///
    
    @GetMapping("/payment")
    public ResponseEntity<?> showPaymentPage(HttpSession session) {
        BookingInitiationDTO bookingInitiationDTO = (BookingInitiationDTO) session.getAttribute("bookingInitiationDTO");
        if (bookingInitiationDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Your session has expired. Please start a new search.");
        }
        HotelDTO hotelDTO = hotelService.findHotelDtoById(bookingInitiationDTO.getHotelId());
        return ResponseEntity.status(HttpStatus.OK).body(bookingInitiationDTO);
    }


    @PostMapping("/initiate")
    public ResponseEntity<String> initiateBooking(@Valid @RequestBody BookingInitiationDTO bookingInitiationDTO, HttpSession session) {
        session.setAttribute("bookingInitiationDTO", bookingInitiationDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Booking initiation successful");
    }

    @PostMapping("/payment")
    public ResponseEntity<?> confirmBooking(@Valid @RequestBody PaymentCardDTO paymentDTO, HttpSession session) {
        BookingInitiationDTO bookingInitiationDTO = (BookingInitiationDTO) session.getAttribute("bookingInitiationDTO");
        if (bookingInitiationDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Your session has expired. Please start a new search.");
        }
        try {
            Long userId = getLoggedInUserId();
            BookingDTO bookingDTO = bookingService.confirmBooking(bookingInitiationDTO, userId);
            return ResponseEntity.status(HttpStatus.OK).body(bookingDTO);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred. Please try again later.");
        }
    }



    // //Thanh Toan
    // @PostMapping("/payment")
    // public ResponseEntity<Object> confirmBooking (@RequestBody PaymentCardDTO paymentCardDTO, BindingResult result,HttpSession session ){

    //     BookingInitiationDTO bookingInitiationDTO = (BookingInitiationDTO) session.getAttribute("bookingInitiationDTO");
    //     if (bookingInitiationDTO == null) {
    //         return ResponseEntity.status(HttpStatus.BAD_REQUEST)
    //             .body("Session expired. Please start a new search.");
    //     }
    //     if (result.hasErrors()) {
    //         return ResponseEntity.badRequest().body(result.getAllErrors());// Trả về lỗi xác thực
    //     }
    //     try {
    //         Long userId = getLoggedInUserId();
    //         BookingDTO bookingDTO = bookingService.confirmBooking(bookingInitiationDTO, userId);
    //         return ResponseEntity.ok(null);
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Xảy ra lỗi bất ngờ. Hãy thử lại sau."); // Xử lý lỗi
    //     }
    // }
    // Lấy userId đang đăng nhập
    private Long getLoggedInUserId() {
        // Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        // String username = auth.getName();
        //String username = SecurityContextHolder.getContext().getAuthentication().getName();
        
        String jwt = jwtTokenUtil.extractJwtFromRequest(request);
        String username = jwtTokenUtil.getUsernameFromToken(jwt);
        //UserDTO userDTO = userService.findUserDTOByUsername(username);
        
        Customer customer = customerService.findByUsername(username).orElseThrow();
        System.out.println(customer.getId());
        //System.out.println(userDTO.getId());
        return customer.getId();
    }

    // hiển thị ditail
    @GetMapping("/confirmation/{bookingId}")
    public ResponseEntity<BookingDTO> getBookingConfirmation(@PathVariable Long bookingId) {
        BookingDTO bookingDTO = bookingService.findBookingById(bookingId);
        if (bookingDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        LocalDate checkinDate = bookingDTO.getCheckinDate();
        LocalDate checkoutDate = bookingDTO.getCheckoutDate();
        Long durationDays = ChronoUnit.DAYS.between(checkinDate, checkoutDate); //lấy khoảng thời gian lưu trú

        bookingDTO.setDurationDays(durationDays);

        return ResponseEntity.ok(bookingDTO);
    }

    @GetMapping("/success")
    public String successVNPay(){
        return "thanh toan thanh cong";
    }
    
}
