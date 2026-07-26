package com.easybike.dto;

import java.math.BigDecimal;

public class CustomerDashboardDTO {

    private long myBikes;
    private long approvedBikes;
    private long pendingBikes;

    private long myBookings;
    private long activeBookings;
    private long completedBookings;
    private long cancelledBookings;

    private BigDecimal amountSpent;

    public CustomerDashboardDTO() {
    }

    public CustomerDashboardDTO(long myBikes,
                                long approvedBikes,
                                long pendingBikes,
                                long myBookings,
                                long activeBookings,
                                long completedBookings,
                                long cancelledBookings,
                                BigDecimal amountSpent) {

        this.myBikes = myBikes;
        this.approvedBikes = approvedBikes;
        this.pendingBikes = pendingBikes;
        this.myBookings = myBookings;
        this.activeBookings = activeBookings;
        this.completedBookings = completedBookings;
        this.cancelledBookings = cancelledBookings;
        this.amountSpent = amountSpent;
    }

    public long getMyBikes() {
        return myBikes;
    }

    public void setMyBikes(long myBikes) {
        this.myBikes = myBikes;
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

    public long getMyBookings() {
        return myBookings;
    }

    public void setMyBookings(long myBookings) {
        this.myBookings = myBookings;
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

    public BigDecimal getAmountSpent() {
        return amountSpent;
    }

    public void setAmountSpent(BigDecimal amountSpent) {
        this.amountSpent = amountSpent;
    }
}