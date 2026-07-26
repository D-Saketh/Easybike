package com.easybike.controller;

import com.easybike.dto.BikeDetailsDTO;
import com.easybike.dto.BikeRequestDTO;
import com.easybike.dto.BikeResponseDTO;
import com.easybike.service.BikeService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bikes")
public class BikeController {

    private final BikeService bikeService;

    public BikeController(BikeService bikeService) {
        this.bikeService = bikeService;
    }

    // Register Bike
    @PostMapping("/register")
    public ResponseEntity<String> registerBike(@RequestBody BikeRequestDTO request) {

        String response = bikeService.registerBike(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // My Bikes
    @GetMapping("/my")
    public ResponseEntity<List<BikeResponseDTO>> getMyBikes() {

        return ResponseEntity.ok(
                bikeService.getMyBikes()
        );
    }

    // Approved Bikes with Pagination & Sorting
    @GetMapping
    public ResponseEntity<Page<BikeResponseDTO>> getApprovedBikes(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "5") int size,

            @RequestParam(defaultValue = "id") String sortBy,

            @RequestParam(defaultValue = "asc") String direction) {

        return ResponseEntity.ok(
                bikeService.getApprovedBikes(
                        page,
                        size,
                        sortBy,
                        direction
                )
        );
    }

    // Bike Details
    @GetMapping("/{id}")
    public ResponseEntity<BikeDetailsDTO> getBikeById(@PathVariable Long id) {

        return ResponseEntity.ok(
                bikeService.getBikeById(id)
        );
    }

    // Search Bikes
    @GetMapping("/search")
    public ResponseEntity<List<BikeResponseDTO>> searchBikes(
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) String model) {

        return ResponseEntity.ok(
                bikeService.searchBikes(brand, model)
        );
    }
}