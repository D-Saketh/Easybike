import axios from "./axios";

export const getCustomerDashboard = async () => {
    const response = await axios.get(
        "http://localhost:8080/api/users/dashboard"
    );

    return response.data;
};