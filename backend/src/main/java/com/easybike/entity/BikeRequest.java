package com.easybike.entity;

import com.easybike.enums.BikeStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "bike_requests")
public class BikeRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    @Column(length = 1000)
    private String ownerPhoto;

    @Column(length = 1000)
    private String rcCertificate;

    @Column(length = 1000)
    private String pollutionCertificate;

    @Column(length = 1000)
    private String insuranceCertificate;

    // Bike Images
    @Column(length = 1000)
    private String frontView;

    @Column(length = 1000)
    private String backView;

    @Column(length = 1000)
    private String leftView;

    @Column(length = 1000)
    private String rightView;

    @Enumerated(EnumType.STRING)
    private BikeStatus status;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @OneToMany(mappedBy = "bike", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Booking> bookings;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public BikeRequest() {
    }

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        status = BikeStatus.PENDING;
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Integer getMileage() {
        return mileage;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    public BigDecimal getPricePerHour() {
        return pricePerHour;
    }

    public void setPricePerHour(BigDecimal pricePerHour) {
        this.pricePerHour = pricePerHour;
    }

    public String getOwnerPhoto() {
        return ownerPhoto;
    }

    public void setOwnerPhoto(String ownerPhoto) {
        this.ownerPhoto = ownerPhoto;
    }

    public String getRcCertificate() {
        return rcCertificate;
    }

    public void setRcCertificate(String rcCertificate) {
        this.rcCertificate = rcCertificate;
    }

    public String getPollutionCertificate() {
        return pollutionCertificate;
    }

    public void setPollutionCertificate(String pollutionCertificate) {
        this.pollutionCertificate = pollutionCertificate;
    }

    public String getInsuranceCertificate() {
        return insuranceCertificate;
    }

    public void setInsuranceCertificate(String insuranceCertificate) {
        this.insuranceCertificate = insuranceCertificate;
    }

    public String getFrontView() {
        return frontView;
    }

    public void setFrontView(String frontView) {
        this.frontView = frontView;
    }

    public String getBackView() {
        return backView;
    }

    public void setBackView(String backView) {
        this.backView = backView;
    }

    public String getLeftView() {
        return leftView;
    }

    public void setLeftView(String leftView) {
        this.leftView = leftView;
    }

    public String getRightView() {
        return rightView;
    }

    public void setRightView(String rightView) {
        this.rightView = rightView;
    }

    public BikeStatus getStatus() {
        return status;
    }

    public void setStatus(BikeStatus status) {
        this.status = status;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}