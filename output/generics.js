"use strict";
//* Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const addID2 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Rakib",
    age: 25,
    country: "Bangladesh",
});
console.log(user);
let user2 = addID2({
    name: "Rupom",
    age: 25,
    country: "England",
});
console.log(user2);
