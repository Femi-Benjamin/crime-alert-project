export const getToken = () => {
    return localStorage.getItem("cr:user:token");
};

export const setAuthToken = (token) => {
    localStorage.setItem("cr:user:token", token);
};

export const setLocationHistory = (location) => {
    sessionStorage.setItem(
        "cr:user:redirect:location",
        JSON.stringify(location)
    );
};
