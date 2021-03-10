export const isAuthenticated = () => {

const jwt = localStorage.getItem('jwt_info');


if(jwt) {

    return jwt

}

return false

}