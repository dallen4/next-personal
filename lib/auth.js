// auth lib functions
import { AUTH_TOKEN } from './constants';

const isAuthenticated = () => {

    let token = localStorage.getItem(AUTH_TOKEN);

    return token ? true : false;

};

const storeToken = (token) => {

    localStorage.setItem(AUTH_TOKEN, token);

};

const removeToken = () => {

    localStorage.removeItem(AUTH_TOKEN);

};

export {
    isAuthenticated,
    storeToken,
    removeToken,
};
