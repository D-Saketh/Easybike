package com.easybike.controller;

import com.easybike.dto.AdminDashboardDTO;
import com.easybike.dto.BikeResponseDTO;
import com.easybike.dto.BookingResponseDTO;
import com.easybike.service.BikeService;
import com.easybike.service.BookingService;
import com.easybike.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final BikeService bikeService;
    private final BookingService bookingService;
    private final DashboardService dashboardService;

    public AdminController(BikeService bikeService,
                           BookingService bookingService,
                           DashboardService dashboardService) {

        this.bikeService = bikeService;
        this.bookingService = bookingService;
        this.dashboardService = dashboardService;
    }

    @GetMapping("/bikes/pending")
    public ResponseEntity<List<BikeResponseDTO>> getPendingBikes() {
        return ResponseEntity.ok(bikeService.getPendingBikes());
    }

    @PutMapping("/bikes/{id}/approve")
    public ResponseEntity<String> approveBike(@PathVariable Long id) {
        return ResponseEntity.ok(bikeService.approveBike(id));
    }

    @PutMapping("/bikes/{id}/reject")
    public ResponseEntity<String> rejectBike(@PathVariable Long id) {
        return ResponseEntity.ok(bikeService.rejectBike(id));
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<BookingResponseDTO>> getAllBookings() {
        return ResponseEntity.ok(bookingService.getAllBookings());
    }

    @PutMapping("/bookings/{id}/complete")
    public ResponseEntity<String> completeBooking(@PathVariable Long id) {
        return ResponseEntity.ok(
                bookingService.completeBooking(id)
        );
    }

    @GetMapping("/dashboard")
    public ResponseEntity<AdminDashboardDTO> getDashboard() {

        return ResponseEntity.ok(
                dashboardService.getDashboard()
        );
    }
}