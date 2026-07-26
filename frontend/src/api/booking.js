import axios from "./axios";

export const bookBike = async (bookingData) => {
    const response = await axios.post("/api/bookings", bookingData);
    return response.data;
};

export const getMyBookings = async () => {
    const response = await axios.get("/api/bookings/my");
    return response.data;
};

export const cancelBooking = async (bookingId) => {
    const response = await axios.put(
        `/api/bookings/${bookingId}/cancel`
    );

    return response.data;
};