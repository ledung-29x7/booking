package Aptech.booking_hotel.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import Aptech.booking_hotel.responsitory.PaymentResponsitory;
import Aptech.booking_hotel.service.VNPayService;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class VNPayController {
    @Autowired
    private VNPayService vnPayService;

    @Autowired
    private PaymentResponsitory paymentResponsitory;

    @PostMapping("/submitOrder")
    public ResponseEntity<Map<String, String>> submitOrder(
        @RequestParam("amount") BigDecimal orderTotal,
        @RequestParam("orderInfo") String orderInfo,
        HttpServletRequest request
    ) {
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort();
        String vnpayUrl = vnPayService.createOrder(orderTotal, orderInfo, baseUrl);
        
        Map<String, String> response = new HashMap<>();
        response.put("redirectUrl", vnpayUrl);

        return ResponseEntity.status(HttpStatus.SEE_OTHER).body(response);
    }

    @GetMapping("/vnpay-payment")
    public ResponseEntity<Map<String, Object>> getPaymentInfo(HttpServletRequest request) {
        int paymentStatus = vnPayService.orderReturn(request);

        String orderInfo = request.getParameter("vnp_OrderInfo");
        String paymentTime = request.getParameter("vnp_PayDate");
        String transactionId = request.getParameter("vnp_TransactionNo");
        String totalPrice = request.getParameter("vnp_Amount");

        Map<String, Object> response = new HashMap<>();
        response.put("orderId", orderInfo);
        response.put("totalPrice", totalPrice);
        response.put("paymentTime", paymentTime);
        response.put("transactionId", transactionId);

        if (paymentStatus == 1) {
            response.put("status", "success");
        } else {
            response.put("status", "failure");
        }

        return ResponseEntity.ok(response);
    }
}
