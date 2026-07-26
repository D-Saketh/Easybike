package com.easybike.service;

import com.easybike.dto.AdminDashboardDTO;
import com.easybike.dto.CustomerDashboardDTO;
import com.easybike.entity.Booking;
import com.easybike.entity.User;
import com.easybike.enums.BikeStatus;
import com.easybike.enums.BookingStatus;
import com.easybike.repository.BikeRequestRepository;
import com.easybike.repository.BookingRepository;
import com.easybike.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class DashboardService {

    private final UserRepository userRepository;
    private final BikeRequestRepository bikeRepository;
    private final BookingRepository bookingRepository;

    public DashboardService(UserRepository userRepository,
                            BikeRequestRepository bikeRepository,
                            BookingRepository bookingRepository) {
        this.userRepository = userRepository;
        this.bikeRepository = bikeRepository;
        this.bookingRepository = bookingRepository;
    }

    // ==========================
    // ADMIN DASHBOARD
    // ==========================

    public AdminDashboardDTO getDashboard() {

        long totalUsers = userRepository.count();

        long totalBikes = bikeRepository.count();

        long approvedBikes =
                bikeRepository.countByStatus(BikeStatus.APPROVED);

        long pendingBikes =
                bikeRepository.countByStatus(BikeStatus.PENDING);

        long totalBookings =
                bookingRepository.count();

        long activeBookings =
                bookingRepository.countByStatus(BookingStatus.BOOKED);

        long completedBookings =
                bookingRepository.countByStatus(BookingStatus.COMPLETED);

        long cancelledBookings =
                bookingRepository.countByStatus(BookingStatus.CANCELLED);

        List<Booking> completed =
                bookingRepository.findByStatus(BookingStatus.COMPLETED);

        BigDecimal revenue = BigDecimal.ZERO;

        for (Booking booking : completed) {
            revenue = revenue.add(booking.getTotalAmount());
        }

        return new AdminDashboardDTO(
                totalUsers,
                totalBikes,
                approvedBikes,
                pendingBikes,
                totalBookings,
                activeBookings,
                completedBookings,
                cancelledBookings,
                revenue
        );
    }

    // ==========================
    // CUSTOMER DASHBOARD
    // ==========================

    public CustomerDashboardDTO getCustomerDashboard() {

        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();

        User customer = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        long myBikes =
                bikeRepository.countByOwnerId(customer.getId());

        long approvedBikes =
                bikeRepository.countByOwnerIdAndStatus(
                        customer.getId(),
                        BikeStatus.APPROVED
                );

        long pendingBikes =
                bikeRepository.countByOwnerIdAndStatus(
                        customer.getId(),
                        BikeStatus.PENDING
                );

        long myBookings =
                bookingRepository.countByCustomerId(customer.getId());

        long activeBookings =
                bookingRepository.countByCustomerIdAndStatus(
                        customer.getId(),
                        BookingStatus.BOOKED
                );

        long completedBookings =
                bookingRepository.countByCustomerIdAndStatus(
                        customer.getId(),
                        BookingStatus.COMPLETED
                );

        long cancelledBookings =
                bookingRepository.countByCustomerIdAndStatus(
                        customer.getId(),
                        BookingStatus.CANCELLED
                );

        List<Booking> bookings =
                bookingRepository.findByCustomerId(customer.getId());

        BigDecimal amountSpent = BigDecimal.ZERO;

        for (Booking booking : bookings) {
            if (booking.getStatus() == BookingStatus.COMPLETED) {
                amountSpent = amountSpent.add(
                        booking.getTotalAmount()
                );
            }
        }

        return new CustomerDashboardDTO(
                myBikes,
                approvedBikes,
                pendingBikes,
                myBookings,
                activeBookings,
                completedBookings,
                cancelledBookings,
                amountSpent
        );
    }
}