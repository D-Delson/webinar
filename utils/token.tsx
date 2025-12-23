const setTokenAndUserData = ({
    access_token,
    refresh_token
}: {
    access_token: string;
    refresh_token: string;
    user_data: any;
}) => {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
};

const getAccessToken = () => {
    return localStorage.getItem("access_token");
};

const getRefreshToken = () => {
    return localStorage.getItem("refresh_token");
};



export {
    setTokenAndUserData,
    getAccessToken,
    getRefreshToken,

};
