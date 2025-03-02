import axios from "axios";

const API_URL = "http://10.36.17.45:5000";

export const registerUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error registering user");
    }
};
export default LoginScreen = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/Login`, {
            username,
            password,
        });
        return response.data.token;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Invalid Login");
    }
};