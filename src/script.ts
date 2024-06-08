import { Player } from "./classes/Player";
import { IsPlayer } from "./interfaces/IsPlayer";

const mashrafi = new Player("Mashrafi", 40, "BD");
let sakib: IsPlayer;
sakib = new Player("Sakib", 35, "ENG");

const players: IsPlayer[] = [];

players.push(sakib);
players.push(mashrafi);
