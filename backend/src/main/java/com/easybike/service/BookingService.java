package com.easybike.service;

import com.easybike.dto.BookingRequestDTO;
import com.easybike.dto.BookingResponseDTO;
import com.easybike.entity.BikeRequest;
import com.easybike.entity.Booking;
import com.easybike.entity.User;
import com.easybike.enums.BikeStatus;
import com.easybike.enums.BookingStatus;
import com.easybike.exception.ResourceNotFoundException;
import com.easybike.repository.BikeRequestRepository;
import com.easybike.repository.BookingRepository;
import com.easybike.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final BikeRequestRepository bikeRequestRepository;
    private final UserRepository userRepository;

    public BookingService(BookingRepository bookingRepository,
                          BikeRequestRepository bikeRequestRepository,
                          UserRepository userRepository) {

        this.bookingRepository = bookingRepository;
        this.bikeRequestRepository = bikeRequestRepository;
        this.userRepository = userRepository;
    }

    public BookingResponseDTO bookBike(BookingRequestDTO request) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User customer = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        BikeRequest bike = bikeRequestRepository.findById(request.getBikeId())
                .orElseThrow(() -> new ResourceNotFoundException("Bike not found"));

        boolean alreadyBooked =
                bookingRepository
                        .existsByBikeIdAndStatusNotAndPickupDateLessThanEqualAndReturnDateGreaterThanEqual(
                                bike.getId(),
                                BookingStatus.COMPLETED,
                                request.getReturnDate(),
                                request.getPickupDate()
                        );

        if (alreadyBooked) {
            throw new RuntimeException("Bike is already booked for the selected dates.");
        }

        if (bike.getStatus() != BikeStatus.APPROVED) {
            throw new RuntimeException("Bike is not approved");
        }

        long days = ChronoUnit.DAYS.between(
                request.getPickupDate(),
                request.getReturnDate()
        );

        if (days <= 0) {
            days = 1;
        }

        BigDecimal totalAmount =
                bike.getPricePerHour()
                        .multiply(BigDecimal.valueOf(days * 24));

        Booking booking = new Booking();

        booking.setCustomer(customer);
        booking.setBike(bike);
        booking.setPickupDate(request.getPickupDate());
        booking.setReturnDate(request.getReturnDate());
        booking.setTotalAmount(totalAmount);

        bookingRepository.save(booking);

        return new BookingResponseDTO(
                booking.getId(),
                bike.getBrand(),
                bike.getModel(),
                booking.getPickupDate(),
                booking.getReturnDate(),
                booking.getTotalAmount(),
                booking.getStatus()
        );
    }

    public List<BookingResponseDTO> getMyBookings() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User customer = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return bookingRepository.findByCustomerId(customer.getId())
                .stream()
                .map(booking -> new BookingResponseDTO(
                        booking.getId(),
                        booking.getBike().getBrand(),
                        booking.getBike().getModel(),
                        booking.getPickupDate(),
                        booking.getReturnDate(),
                        booking.getTotalAmount(),
                        booking.getStatus()
                ))
                .toList();
    }

    public List<BookingResponseDTO> getAllBookings() {

        return bookingRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(booking -> new BookingResponseDTO(
                        booking.getId(),
                        booking.getBike().getBrand(),
                        booking.getBike().getModel(),
                        booking.getPickupDate(),
                        booking.getReturnDate(),
                        booking.getTotalAmount(),
                        booking.getStatus()
                ))
                .toList();
    }

    public String completeBooking(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));

        booking.setStatus(BookingStatus.COMPLETED);

        bookingRepository.save(booking);

        return "Booking completed successfully.";
    }

    public String cancelBooking(Long bookingId) {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User customer = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found"));

        if (!booking.getCustomer().getId().equals(customer.getId())) {
            throw new RuntimeException("You can cancel only your own booking.");
        }

        if (booking.getStatus() == BookingStatus.COMPLETED) {
            throw new RuntimeException("Completed booking cannot be cancelled.");
        }

        booking.setStatus(BookingStatus.CANCELLED);

        bookingRepository.save(booking);

        return "Booking cancelled successfully.";
    }
}