'use strict';

let flower = function (name, img, season) {
    this.name = name;
    this.img = img;
    this.season = season;
    flower.all(this);
};
flower.all = [];

flower.prototype.addLocalStorage = function () {
    localStorage.setItem('data', JSON.stringify(flower.all));
};




let handelSubmit = function (event) {
    event.preventDefault();
    let flower = new flower(document.getElementById('name').value, document.getElementById('img').value, document.getElementById('season').value);
    flower.addLocalStorage();
    render();
};


let body = document.getElementById('body');
let render = function () {
    if (localStorage.data)
        for (let i = 0; i < localStorage.JSON.parse(flower.all).length; i++) {


            let trTag = document.getElementById('tr');
            body.appendChild(trTag);
            let thTag = document.getElementById('th');
            trTag.appendChild(thTag);
            thTag.textContent = '#';

            thTag.creatElement('th');
            trTag.appendChild(thTag);
            thTag.textContent = 'image';

            thTag.creatElement('th');
            trTag.appendChild(thTag);
            thTag.textContent = 'Season';


            let tdTag = document.getElementById('td');
            trTag.appendChild(tdTag);
            tdTag.textContent = 'x' + deletefrom();


            tdTag = document.getElementById('td');
            trTag.appendChild(tdTag);
            tdTag.textContent = flower.all[i].img;


            tdTag = document.getElementById('td');
            trTag.appendChild(tdTag);
            tdTag.textContent = flower.all.name;

            tdTag = document.getElementById('td');
            trTag.appendChild(tdTag);
            tdTag.textContent = flower.all.season;



        }

};

let deletefrom = function () {
    flower.all = [];
    for (let i = 0; i < localStorage.JSON.parse(flower.all).length; i++) {
        localStorage.setItem('data', JSON.stringify(flower.all));
    }
};

let addlocalstorageToArray = function () {
    if (localStorage.data) {
        for (let i = 0; i < JSON.parse(localStorage.data).length; i++) {
            flower.all.push(localStorage.data)[i];

        }
    }
};

let form = document.addEventListener('submit', handelSubmit);
addlocalstorageToArray();

render();





