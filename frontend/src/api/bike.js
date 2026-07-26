import axios from "./axios";

export const getApprovedBikes = async (
    page = 0,
    size = 6,
    sortBy = "id",
    direction = "asc"
) => {
    const response = await axios.get("/api/bikes", {
        params: {
            page,
            size,
            sortBy,
            direction,
        },
    });

    return response.data;
};

export const getBikeById = async (id) => {
    const response = await axios.get(`/api/bikes/${id}`);
    return response.data;
};

export const searchBikes = async (brand, model) => {
    const response = await axios.get("/api/bikes/search", {
        params: {
            brand,
            model,
        },
    });

    return response.data;
};

export const registerBike = async (bikeData) => {
    const response = await axios.post("/api/bikes/register", bikeData);
    return response.data;
};