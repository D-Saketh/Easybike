package com.easybike.dto;

import com.easybike.enums.BikeStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BikeResponseDTO {

    private Long id;

    private String brand;
    private String model;
    private String color;

    private Integer mileage;

    private BigDecimal pricePerHour;

    private BikeStatus status;

    private String frontView;
}