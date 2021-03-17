'use strict';

const Flower = function (name, imgName, season) {
    this.name = name;
    this.imgName = imgName;
    this.path = `../img/${this.imgName}.jpeg`;
    this.season = season;
    Flower.all.push(this);
};

Flower.all = [];

if (localStorage.data) {
    Flower.all = JSON.parse(localStorage.getItem('flower'));
}

Flower.prototype.addToLocalStorage = function () {
    localStorage.setItem('flower', JSON.stringify(Flower.all));
};




const handelSubmit = function (event) {
    event.preventDefault();
    let flowerName = event.target.name.value;
    let flowerimg = event.target.img.value;
    let flowerSeason = event.target.season.value;

    let flower = new Flower(flowerName, flowerimg, flowerSeason);
    flower.addToLocalStorage();
    render();
};


let body = document.getElementById('body');
let render = function () {
    if (localStorage.flower)
        body.innerHTML = '';
    let trTag = document.createElement('tr');

    let thTag1 = document.createElement('th');
    trTag.appendChild(thTag1);
    thTag1.textContent = '#';



    let thTag2 = document.createElement('th');
    trTag.appendChild(thTag2);
    thTag2.textContent = 'image';

    let thTag3 = document.createElement('th');
    trTag.appendChild(thTag3);
    thTag3.textContent = 'name';

    let thTag4 = document.createElement('th');
    trTag.appendChild(thTag4);
    thTag4.textContent = 'Season';
    body.appendChild(trTag);
    for (let i = 0; i < JSON.parse(localStorage.getItem('flower')).length; i++) {





        // let tdTag = document.createElement('td');
        // trTag.appendChild(tdTag);
        // tdTag.textContent = 'x' + deletefrom();

        let trTag2 = document.createElement('tr');


        let tdTag5 = document.createElement('td');
        trTag2.appendChild(tdTag5);
        tdTag5.textContent = 'X';


        let tdTag6 = document.createElement('td');
        trTag2.appendChild(tdTag6);
        tdTag6.innerHTML = `<img src='${Flower.all[i].path}'/>`;


        let tdTag7 = document.createElement('td');
        trTag2.appendChild(tdTag7);
        tdTag7.textContent = Flower.all[i].name;

        let tdTag8 = document.createElement('td');
        trTag2.appendChild(tdTag8);
        tdTag8.textContent = Flower.all[i].season;

        body.appendChild(trTag2);

    }

};

// let deletefrom = function () {
//     Flower.all = [];
//     for (let i = 0; i < JSON.parse(localStorage.getItem('flower')).length; i++) {
//         localStorage.setItem('data', JSON.stringify(Flower.all));
//     }
// };

let addlocalstorageToArray = function () {
    if (localStorage.flower) {
        for (let i = 0; i < JSON.parse(localStorage.flower).length; i++) {
            Flower.all.push(JSON.parse(localStorage.flower)[i]);

        }
    }
};

let form = document.getElementById('form');
form.addEventListener('submit', handelSubmit);
addlocalstorageToArray();

render();





