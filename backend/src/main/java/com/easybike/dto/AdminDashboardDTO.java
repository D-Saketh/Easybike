package com.easybike.dto;

import java.math.BigDecimal;

public class AdminDashboardDTO {

    private long totalUsers;
    private long totalBikes;
    private long approvedBikes;
    private long pendingBikes;

    private long totalBookings;
    private long activeBookings;
    private long completedBookings;
    private long cancelledBookings;

    private BigDecimal totalRevenue;

    public AdminDashboardDTO() {
    }

    public AdminDashboardDTO(long totalUsers,
                             long totalBikes,
                             long approvedBikes,
                             long pendingBikes,
                             long totalBookings,
                             long activeBookings,
                             long completedBookings,
                             long cancelledBookings,
                             BigDecimal totalRevenue) {

        this.totalUsers = totalUsers;
        this.totalBikes = totalBikes;
        this.approvedBikes = approvedBikes;
        this.pendingBikes = pendingBikes;
        this.totalBookings = totalBookings;
        this.activeBookings = activeBookings;
        this.completedBookings = completedBookings;
        this.cancelledBookings = cancelledBookings;
        this.totalRevenue = totalRevenue;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalBikes() {
        return totalBikes;
    }

    public void setTotalBikes(long totalBikes) {
        this.totalBikes = totalBikes;
    }

    public long getApprovedBikes() {
        return approvedBikes;
    }

    public void setApprovedBikes(long approvedBikes) {
        this.approvedBikes = approvedBikes;
    }

    public long getPendingBikes() {
        return pendingBikes;
    }

    public void setPendingBikes(long pendingBikes) {
        this.pendingBikes = pendingBikes;
    }

    public long getTotalBookings() {
        return totalBookings;
    }

    public void setTotalBookings(long totalBookings) {
        this.totalBookings = totalBookings;
    }

    public long getActiveBookings() {
        return activeBookings;
    }

    public void setActiveBookings(long activeBookings) {
        this.activeBookings = activeBookings;
    }

    public long getCompletedBookings() {
        return completedBookings;
    }

    public void setCompletedBookings(long completedBookings) {
        this.completedBookings = completedBookings;
    }

    public long getCancelledBookings() {
        return cancelledBookings;
    }

    public void setCancelledBookings(long cancelledBookings) {
        this.cancelledBookings = cancelledBookings;
    }

    public BigDecimal getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(BigDecimal totalRevenue) {
        this.totalRevenue = totalRevenue;
    }
}