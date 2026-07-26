import axios from "./axios";

export const getDashboard = async () => {
    const response = await axios.get("/api/admin/dashboard");
    return response.data;
};

export const getPendingBikes = async () => {
    const response = await axios.get("/api/admin/bikes/pending");
    return response.data;
};

export const approveBike = async (id) => {
    const response = await axios.put(`/api/admin/bikes/${id}/approve`);
    return response.data;
};

export const rejectBike = async (id) => {
    const response = await axios.put(`/api/admin/bikes/${id}/reject`);
    return response.data;
};
export const getAllBookings = async () => {
    const response = await axios.get("/api/admin/bookings");
    return response.data;
};

export const completeBooking = async (id) => {
    const response = await axios.put(`/api/admin/bookings/${id}/complete`);
    return response.data;
};