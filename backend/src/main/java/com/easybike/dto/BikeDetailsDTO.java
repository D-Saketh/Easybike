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
public class BikeDetailsDTO {

    private Long id;

    private String brand;
    private String model;
    private String color;
    private String fuelType;

    private Integer mileage;

    private BigDecimal pricePerHour;

    private String frontView;
    private String backView;
    private String leftView;
    private String rightView;

    private BikeStatus status;
}