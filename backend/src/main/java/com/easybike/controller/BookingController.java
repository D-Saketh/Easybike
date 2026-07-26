package com.easybike.controller;

import com.easybike.dto.BookingRequestDTO;
import com.easybike.dto.BookingResponseDTO;
import com.easybike.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<BookingResponseDTO> bookBike(
            @RequestBody BookingRequestDTO request) {

        return new ResponseEntity<>(
                bookingService.bookBike(request),
                HttpStatus.CREATED
        );
    }

    @GetMapping("/my")
    public ResponseEntity<List<BookingResponseDTO>> getMyBookings() {

        return ResponseEntity.ok(
                bookingService.getMyBookings()
        );
    }
    @PutMapping("/{id}/cancel")
    public ResponseEntity<String> cancelBooking(@PathVariable Long id) {

        return ResponseEntity.ok(
                bookingService.cancelBooking(id)
        );
    }
}