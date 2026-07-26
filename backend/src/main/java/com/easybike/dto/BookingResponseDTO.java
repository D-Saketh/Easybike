package com.easybike.dto;

import com.easybike.enums.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponseDTO {

    private Long bookingId;

    private String brand;

    private String model;

    private LocalDate pickupDate;

    private LocalDate returnDate;

    private BigDecimal totalAmount;

    private BookingStatus status;
}