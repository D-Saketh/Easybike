package com.easybike.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class BookingRequestDTO {

    private Long bikeId;

    private LocalDate pickupDate;

    private LocalDate returnDate;
}