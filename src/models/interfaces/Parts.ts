import { Cards } from "./Cards";
import { Status } from "./Status";
import { ToyoPersona } from "./ToyoPersona";

export interface Parts{
    id: string;
    bonusStatus: Status;
    toyoTecnhnoalloy: string;
    cards: Cards;
    toyoPersona: ToyoPersona;
    toyoPiece: string; 
    status: Status;

}