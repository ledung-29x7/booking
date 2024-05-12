package Aptech.booking_hotel.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.responsitory.ImageResponsitory;
import Aptech.booking_hotel.responsitory.RoomResponsitory;
import io.jsonwebtoken.io.IOException;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    private RoomResponsitory roomResponsitory;
    private ImageResponsitory imageResponsitory;

    @Autowired
    public RoomController(RoomResponsitory roomResponsitory,ImageResponsitory imageResponsitory)
    {
        this.imageResponsitory=imageResponsitory;
        this.roomResponsitory=roomResponsitory;
    }

    @PostMapping("/{roomId}/upload-image")
    public ResponseEntity<String> uploadImageForRoom(@PathVariable Long roomId,
                                                @RequestParam("coverImage") MultipartFile coverImage,
                                                @RequestParam("detailImage1") MultipartFile detailImage1,
                                                @RequestParam("detailImage2") MultipartFile detailImage2,
                                                @RequestParam("detailImage3") MultipartFile detailImage3,
                                                @RequestParam("detailImage3") MultipartFile detailImage4) throws java.io.IOException{
                try {
            Optional<Room> optionalRoom = roomResponsitory.findById(roomId);
            if (optionalRoom.isPresent()) {
                Room room = optionalRoom.get();
                
                Image image = new Image();
                image.setImageCover(uploadFile(coverImage));
                image.setDetailedPhoto1(uploadFile(detailImage1));
                image.setDetailedPhoto2(uploadFile(detailImage2));
                image.setDetailedPhoto3(uploadFile(detailImage3));
                image.setDetailedPhoto4(uploadFile(detailImage4));
                
                imageResponsitory.save(image);
                room.setImage(image);
                roomResponsitory.save(room);
                return ResponseEntity.ok("Images uploaded and attached to room successfully");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload images");
        }
    }
    private String uploadFile(MultipartFile file) throws IOException, java.io.IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String filePath = uploadDir + File.separator + fileName;
        Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
        return filePath;
    }
}
