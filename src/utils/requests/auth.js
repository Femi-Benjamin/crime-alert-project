import { request } from "../axios";
import { setAuthToken } from "../helpers";

export const signupRequest = async (values) => {
    try {
        const response = await request.post("signUp", values);
        console.log(response);
        // setAuthToken(response?.data?.token);
        return response.data;
    } catch (err) {
        console.log("Error:  ", err?.response?.data?.message);
        throw err;
    }
};

export const loginRequest = async (values) => {
    try {
        const response = await request.post("/login", values);
        console.log(response);
        // setAuthToken(response?.data?.token);
        return response.data;
    } catch (err) {
        console.log("Error:  ", err?.response?.data?.message);
        throw err;
    }
};
