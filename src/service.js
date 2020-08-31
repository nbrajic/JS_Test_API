import axios from 'axios';

export const getInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
};

export const getAllShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
};

export const getInactiveShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships?active=false')
};

export const getActiveShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships?active=true')
};