import axios from "./axios";

export const login = async (email, password) => {
    const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
            email,
            password,
        }
    );

    return response.data;
};

export const register = async (
    fullName,
    email,
    phone,
    password
) => {
    const response = await axios.post(
        "http://localhost:8080/api/users",
        {
            fullName,
            email,
            phone,
            password,
            role: "CUSTOMER",
        }
    );

    return response.data;
};