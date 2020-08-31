import { getInfo, getAllShips, getActiveShips, getInactiveShips } from './service.js';
import { ShipList } from './components/ShipList.js';


const app = document.querySelector('#app');
const header = document.querySelector('#header');
const sb = document.querySelector('#sb');


getInfo().then(res => {
    header.textContent = res.data.name + ' | ' + res.data.founder + ' | ' + res.data.founded;
    header.style.color = '#ffffff';
    header.style.fontSize = 'xx-large';
});

getAllShips().then(res => {
    app.append(ShipList(res.data))
});

sb.addEventListener('change', function() {
    if(sb.selectedIndex === 0){
        ShipList([]).textContent = '';
        getAllShips().then(res => app.append(ShipList(res.data)))
    }
    if(sb.selectedIndex === 1){
        ShipList([]).textContent = '';
        getActiveShips().then(res => app.append(ShipList(res.data)))
    }
    if(sb.selectedIndex === 2) {
        ShipList([]).textContent = '';
        getInactiveShips().then(res => app.append(ShipList(res.data)))
    }
})