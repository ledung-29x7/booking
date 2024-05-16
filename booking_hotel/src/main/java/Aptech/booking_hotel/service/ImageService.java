package Aptech.booking_hotel.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.validate.ImageDTO;

public interface ImageService {
    Image saveImageToHotel (ImageDTO imageDTO, Hotel hotel);
    List<Image> saveImagesToHotel(List<ImageDTO> imageDTOs, Hotel hotel);
    Image saveImagetoRoom (ImageDTO imageDTO, Room room);
    List<Image> saveImagesToRoom(List<ImageDTO> imageDTOs, Room room);
    Optional<Image> findImageById (Long id);
    //List<Image> findImageByHotelId(Long hotelId);
    Image updateImage(ImageDTO imageDTO);
    void deleteImage (Long id);
    Image mapImageDtoToImage(ImageDTO imageDTO, Hotel hotel);
    ImageDTO mapImageToImageDto(Image image);
    Image mapImageDtoToImageRoom(ImageDTO imageDTO, Room room);

    Image addImageToHotel(Long hotelId, Image image);
    Image addImageToRoom(Long roomId, Image image);
    Optional<Image> getImageById(Long id);
    List<Image> getImageByHotel(Long hotelId);
}
