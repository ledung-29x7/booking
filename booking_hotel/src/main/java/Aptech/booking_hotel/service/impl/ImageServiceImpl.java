package Aptech.booking_hotel.service.impl;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Aptech.booking_hotel.model.Hotel;
import Aptech.booking_hotel.model.Image;
import Aptech.booking_hotel.model.Room;
import Aptech.booking_hotel.model.validate.HotelRegistrationDTO;
import Aptech.booking_hotel.model.validate.ImageDTO;
import Aptech.booking_hotel.responsitory.HotelResponsitory;
import Aptech.booking_hotel.responsitory.ImageResponsitory;
import Aptech.booking_hotel.responsitory.RoomResponsitory;
import Aptech.booking_hotel.service.ImageService;
import Aptech.booking_hotel.util.ImageUtil;
import jakarta.persistence.EntityNotFoundException;

@Service
public class ImageServiceImpl implements ImageService {

    private ImageResponsitory imageResponsitory;
    private HotelResponsitory hotelResponsitory;
    private RoomResponsitory roomResponsitory;
    @Autowired
    public ImageServiceImpl(ImageResponsitory imageResponsitory, HotelResponsitory hotelResponsitory, RoomResponsitory roomResponsitory){
        this.imageResponsitory=imageResponsitory;
        this.hotelResponsitory=hotelResponsitory;
        this.roomResponsitory=roomResponsitory;
    }

    @Override
    public Image saveImageToHotel(ImageDTO imageDTO, Hotel hotel) {
        Image image = mapImageDtoToImage(imageDTO, hotel);
        image = imageResponsitory.save(image);
        return image;
    }
    @Override
    public List<Image> saveImagesToHotel(List<ImageDTO> imageDTOs, Hotel hotel) {
        List<Image> images = imageDTOs.stream()
                                        .map(imageDTO -> saveImageToHotel(imageDTO, hotel))
                                        .collect(Collectors.toList());
        return images;
    }
    @Override
    public Optional<Image> findImageById(Long id) {
        return imageResponsitory.findById(id);
    }
    @Override
    public Image updateImage(ImageDTO imageDTO) {
        Image existingImage = imageResponsitory.findById(imageDTO.getId()).orElseThrow(()-> new EntityNotFoundException("Room not found"));
        existingImage.setImage(imageDTO.getImage());

        Image updatImage = imageResponsitory.save(existingImage);
        return updatImage;

    }
    @Override
    public void deleteImage(Long id) {
        imageResponsitory.deleteById(id);
    }
    @Override
    public Image mapImageDtoToImage(ImageDTO imageDTO, Hotel hotel) {
        Image image = Image.builder()
                            .hotel(hotel)
                            .image(imageDTO.getImage())
                            .build();
        return image;
    }
    @Override
    public ImageDTO mapImageToImageDto(Image image) {
        return ImageDTO.builder()
                        .id(image.getId())
                        .name(image.getName())
                        .type(image.getType())
                        .image(ImageUtil.decompressImage(image.getImage()))// giải nén
                        .build();
    }
  
    @Override
    public Image saveImagetoRoom(ImageDTO imageDTO, Room room) {
        Image image= mapImageDtoToImageRoom(imageDTO, room);
        image = imageResponsitory.save(image);
        return image;
    }

    @Override
    public List<Image> saveImagesToRoom(List<ImageDTO> imageDTOs, Room room) {
        List<Image> images = imageDTOs.stream()
                                        .map(imageDTO -> saveImagetoRoom(imageDTO,room))
                                        .collect(Collectors.toList());
                return images;
    }


    @Override
    public Image mapImageDtoToImageRoom(ImageDTO imageDTO, Room room) {
        Image image = Image.builder()
                            .room(room)
                            .image(imageDTO.getImage())
                            .build();
        return image;
    }

    @Override
    public Image addImageToHotel(Long hotelId, Image image) {
        try {
            Optional<Hotel> hotel = hotelResponsitory.findById(hotelId);
            byte[] compressedImageData = ImageUtil.compressImage(image.getImage());
            image.setImage(compressedImageData);
            image.setHotel(hotel.get());
            image.setRoom(null);
            return imageResponsitory.save(image);
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public Image addImageToRoom(Long roomId, Image image) {
        try {
            Optional<Room> room = roomResponsitory.findById(roomId);
            byte[] compressedImageData = ImageUtil.compressImage(image.getImage());
            image.setImage(compressedImageData);
            image.setRoom(room.get());
            image.setHotel(null);
            return imageResponsitory.save(image);
        } catch (Exception e) {
            return null;
        }
    }


    @Override
    public Optional<Image> getImageById(Long id) {
        try {
            Optional<Image> imageOptional = imageResponsitory.findById(id);
            if (imageOptional.isPresent()) {
                Image image = imageOptional.get();
                byte[] decompressedImageData = ImageUtil.decompressImage(image.getImage());
                image.setImage(decompressedImageData);
                return Optional.of(image);
            }
            return Optional.empty();
        } catch (Exception e) {
            // Xử lý ngoại lệ hoặc log lỗi ở đây
            return Optional.empty();
        }
    }

    @Override
    public List<Image> getImageByHotel(Long hotelId) {
        try {
            List<Image> images = imageResponsitory.findByHotelId(hotelId);
            return images.stream()
                         .map(image -> {
                             byte[] decompressedImageData = ImageUtil.decompressImage(image.getImage());
                             image.setImage(decompressedImageData);
                             return image;
                         })
                         .collect(Collectors.toList());
        } catch (Exception e) {
            // Xử lý ngoại lệ hoặc log lỗi ở đây
            return List.of();
        }
    }



}
