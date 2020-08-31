export const Ship = (ship) => {
    const shipContainer = document.createElement('div');
    shipContainer.className = 'ship';
    const innerDiv0 = document.createElement('div');
    innerDiv0.className = 'inner-div-0';
    const img = document.createElement('img');
    img.src = ship.image;
    innerDiv0.append(img);
    shipContainer.append(innerDiv0);
    const innerDiv1 = document.createElement('div');
    innerDiv1.className = 'inner-div-1';
    const span = document.createElement('span');
    span.textContent = ship.ship_name;
    innerDiv1.append(span);
    shipContainer.append(innerDiv1);
    const innerDiv2 = document.createElement('div');
    innerDiv2.className = 'inner-div-2';
    const span1 = document.createElement('span');
    span1.textContent = ship.ship_type + ' | ';
    const span2 = document.createElement('span');
    span2.textContent = ship.active ? 'Active: Yes' : 'Active: No';
    innerDiv2.append(span1, span2);
    shipContainer.append(innerDiv2);
    
    img.addEventListener('click', function(){
        window.location.href = ship.url;
    });
    return shipContainer;
};


