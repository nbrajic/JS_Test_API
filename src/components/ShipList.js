import {Ship} from './Ship.js';

const shipList = document.createElement('div');
shipList.className = 'ship-list';

export const ShipList = (arr) => {
    arr.forEach(ship => {
        shipList.append(Ship(ship))
    });
    return shipList;
};
