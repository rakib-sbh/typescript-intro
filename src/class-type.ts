class Player {
  name: string;
  age: number;
  country: string;

  constructor(a: string, b: number, c: string) {
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

let players: Player[] = [];
players.push(sakib);
