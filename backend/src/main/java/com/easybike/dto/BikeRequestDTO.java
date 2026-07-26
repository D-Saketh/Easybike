package com.easybike.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BikeRequestDTO {

    // Owner Details
    private String fullName;
    private String dob;
    private String address;
    private String mobile;
    private String email;

    // Bike Details
    private String brand;
    private String model;
    private String fuelType;
    private String color;
    private Integer mileage;
    private BigDecimal pricePerHour;

    // Documents
    private String ownerPhoto;
    private String rcCertificate;
    private String pollutionCertificate;
    private String insuranceCertificate;

    // Bike Images
    private String frontView;
    private String backView;
    private String leftView;
    private String rightView;
}