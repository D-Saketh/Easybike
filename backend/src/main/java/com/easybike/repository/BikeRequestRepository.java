package com.easybike.repository;

import com.easybike.entity.BikeRequest;
import com.easybike.enums.BikeStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.util.List;

public interface BikeRequestRepository extends JpaRepository<BikeRequest, Long> {

    List<BikeRequest> findByOwnerId(Long ownerId);

    List<BikeRequest> findByStatus(BikeStatus status);

    long countByStatus(BikeStatus status);

    long countByOwnerId(Long ownerId);

    long countByOwnerIdAndStatus(Long ownerId, BikeStatus status);

    List<BikeRequest> findByBrandContainingIgnoreCaseAndStatus(
            String brand,
            BikeStatus status
    );

    List<BikeRequest> findByModelContainingIgnoreCaseAndStatus(
            String model,
            BikeStatus status
    );

    List<BikeRequest> findByBrandContainingIgnoreCaseAndModelContainingIgnoreCaseAndStatus(
            String brand,
            String model,
            BikeStatus status
    );

    // Pagination + Sorting
    Page<BikeRequest> findByStatus(
            BikeStatus status,
            Pageable pageable
    );

    // Filter by Fuel Type
    Page<BikeRequest> findByFuelTypeIgnoreCaseAndStatus(
            String fuelType,
            BikeStatus status,
            Pageable pageable
    );

    // Filter by Color
    Page<BikeRequest> findByColorIgnoreCaseAndStatus(
            String color,
            BikeStatus status,
            Pageable pageable
    );

    // Filter by Price Range
    Page<BikeRequest> findByPricePerHourBetweenAndStatus(
            BigDecimal minPrice,
            BigDecimal maxPrice,
            BikeStatus status,
            Pageable pageable
    );
}