"use strict";
class Player {
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const sakib = new Player("Sakib", 34, "BD");
const rafiq = new Player("Rafiq", 23, "AU");
let players = [];
players.push(sakib);
