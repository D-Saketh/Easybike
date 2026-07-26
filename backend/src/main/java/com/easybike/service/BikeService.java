package com.easybike.service;

import com.easybike.dto.BikeDetailsDTO;
import com.easybike.dto.BikeRequestDTO;
import com.easybike.dto.BikeResponseDTO;
import com.easybike.entity.BikeRequest;
import com.easybike.entity.User;
import com.easybike.enums.BikeStatus;
import com.easybike.exception.ResourceNotFoundException;
import com.easybike.repository.BikeRequestRepository;
import com.easybike.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BikeService {

    private final BikeRequestRepository bikeRequestRepository;
    private final UserRepository userRepository;

    public BikeService(BikeRequestRepository bikeRequestRepository,
                       UserRepository userRepository) {
        this.bikeRequestRepository = bikeRequestRepository;
        this.userRepository = userRepository;
    }

    public String registerBike(BikeRequestDTO request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User owner = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        BikeRequest bikeRequest = new BikeRequest();

        bikeRequest.setFullName(request.getFullName());
        bikeRequest.setDob(request.getDob());
        bikeRequest.setAddress(request.getAddress());
        bikeRequest.setMobile(request.getMobile());
        bikeRequest.setEmail(request.getEmail());

        bikeRequest.setBrand(request.getBrand());
        bikeRequest.setModel(request.getModel());
        bikeRequest.setFuelType(request.getFuelType());
        bikeRequest.setColor(request.getColor());
        bikeRequest.setMileage(request.getMileage());
        bikeRequest.setPricePerHour(request.getPricePerHour());

        bikeRequest.setOwnerPhoto(request.getOwnerPhoto());
        bikeRequest.setRcCertificate(request.getRcCertificate());
        bikeRequest.setPollutionCertificate(request.getPollutionCertificate());
        bikeRequest.setInsuranceCertificate(request.getInsuranceCertificate());

        bikeRequest.setFrontView(request.getFrontView());
        bikeRequest.setBackView(request.getBackView());
        bikeRequest.setLeftView(request.getLeftView());
        bikeRequest.setRightView(request.getRightView());

        bikeRequest.setOwner(owner);

        bikeRequestRepository.save(bikeRequest);

        return "Bike registration submitted successfully";
    }

    public List<BikeResponseDTO> getMyBikes() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User owner = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        List<BikeRequest> bikes =
                bikeRequestRepository.findByOwnerId(owner.getId());

        return bikes.stream()
                .map(this::mapToDTO)
                .toList();
    }

    public List<BikeResponseDTO> getPendingBikes() {

        List<BikeRequest> bikes =
                bikeRequestRepository.findByStatus(BikeStatus.PENDING);

        return bikes.stream()
                .map(this::mapToDTO)
                .toList();
    }

    public String approveBike(Long id) {

        BikeRequest bike = bikeRequestRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bike not found"));

        bike.setStatus(BikeStatus.APPROVED);

        bikeRequestRepository.save(bike);

        return "Bike approved successfully";
    }

    public String rejectBike(Long id) {

        BikeRequest bike = bikeRequestRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bike not found"));

        bike.setStatus(BikeStatus.REJECTED);

        bikeRequestRepository.save(bike);

        return "Bike rejected successfully";
    }

    public List<BikeResponseDTO> getApprovedBikes() {

        List<BikeRequest> bikes =
                bikeRequestRepository.findByStatus(BikeStatus.APPROVED);

        return bikes.stream()
                .map(this::mapToDTO)
                .toList();
    }

    public BikeDetailsDTO getBikeById(Long id) {

        BikeRequest bike = bikeRequestRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Bike not found"));

        return new BikeDetailsDTO(
                bike.getId(),
                bike.getBrand(),
                bike.getModel(),
                bike.getColor(),
                bike.getFuelType(),
                bike.getMileage(),
                bike.getPricePerHour(),
                bike.getFrontView(),
                bike.getBackView(),
                bike.getLeftView(),
                bike.getRightView(),
                bike.getStatus()
        );
    }

    public List<BikeResponseDTO> searchBikes(String brand, String model) {

        List<BikeRequest> bikes;

        if (brand != null && !brand.isBlank() &&
                model != null && !model.isBlank()) {

            bikes = bikeRequestRepository
                    .findByBrandContainingIgnoreCaseAndModelContainingIgnoreCaseAndStatus(
                            brand,
                            model,
                            BikeStatus.APPROVED
                    );

        } else if (brand != null && !brand.isBlank()) {

            bikes = bikeRequestRepository
                    .findByBrandContainingIgnoreCaseAndStatus(
                            brand,
                            BikeStatus.APPROVED
                    );

        } else if (model != null && !model.isBlank()) {

            bikes = bikeRequestRepository
                    .findByModelContainingIgnoreCaseAndStatus(
                            model,
                            BikeStatus.APPROVED
                    );

        } else {

            bikes = bikeRequestRepository.findByStatus(BikeStatus.APPROVED);
        }

        return bikes.stream()
                .map(this::mapToDTO)
                .toList();
    }

    public Page<BikeResponseDTO> getApprovedBikes(int page,
                                                  int size,
                                                  String sortBy,
                                                  String direction) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<BikeRequest> bikes =
                bikeRequestRepository.findByStatus(
                        BikeStatus.APPROVED,
                        pageable
                );

        return bikes.map(this::mapToDTO);
    }

    private BikeResponseDTO mapToDTO(BikeRequest bike) {

        return new BikeResponseDTO(
                bike.getId(),
                bike.getBrand(),
                bike.getModel(),
                bike.getColor(),
                bike.getMileage(),
                bike.getPricePerHour(),
                bike.getStatus(),
                bike.getFrontView()
        );
    }
}