package Aptech.booking_hotel.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.service.ImageService;

@RestController
@RequestMapping("/image")
public class ImageController {

    	@Autowired
	    private ImageService imageService;
     
	@PostMapping("/upload/hotel/{hotelId}")
    public ResponseEntity<Image> uploadImageToHotel(@PathVariable Long hotelId, @RequestParam("file") MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getOriginalFilename());
        image.setImage(file.getBytes());
		image.setType(file.getContentType());
		image.setRoom(null);
        Image savedImage = imageService.addImageToHotel(hotelId, image);
        if (savedImage != null) {
            return ResponseEntity.ok(savedImage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

	@PostMapping("/upload/room/{roomId}")
    public ResponseEntity<Image> uploadImageToRoom(@PathVariable Long roomId, @RequestParam("file") MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getOriginalFilename());
        image.setImage(file.getBytes());
		image.setType(file.getContentType());
		image.setHotel(null);
        Image savedImage = imageService.addImageToRoom(roomId, image);
        if (savedImage != null) {
            return ResponseEntity.ok(savedImage);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/viewimagehotel/{hotelId}")
    public ResponseEntity<List<Image>> viewImages(@PathVariable Long hotelId) {
        List<Image> images = imageService.getImageByHotel(hotelId);
        if (!images.isEmpty()) {
            return ResponseEntity.ok(images);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

	@GetMapping("/view/{id}")
    public ResponseEntity<byte[]> viewImageById(@PathVariable Long id) {
        Optional<Image> imageData = imageService.getImageById(id);
        if (imageData.isPresent()) {
            Image image = imageData.get();
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + image.getName() + "\"")
                    .contentType(MediaType.IMAGE_JPEG)  // Adjust according to your image type
                    .body(image.getImage());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
