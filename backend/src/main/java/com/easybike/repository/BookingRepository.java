package com.easybike.repository;

import com.easybike.entity.Booking;
import com.easybike.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByCustomerId(Long customerId);

    List<Booking> findByBikeId(Long bikeId);

    List<Booking> findAllByOrderByCreatedAtDesc();

    List<Booking> findByStatus(BookingStatus status);

    long countByStatus(BookingStatus status);

    long countByCustomerId(Long customerId);

    long countByCustomerIdAndStatus(Long customerId, BookingStatus status);

    boolean existsByBikeIdAndStatusNotAndPickupDateLessThanEqualAndReturnDateGreaterThanEqual(
            Long bikeId,
            BookingStatus status,
            LocalDate returnDate,
            LocalDate pickupDate
    );
}