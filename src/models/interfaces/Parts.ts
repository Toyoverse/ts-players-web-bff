import { Card } from "./Card";
import { Status } from "./Status";
import { ToyoPersona } from "./ToyoPersona";

export interface Parts{
    id: string;
    bonusStatus: Status;
    toyoTecnhnoalloy: string;
    cards: Card[];
    toyoPersona: ToyoPersona;
    toyoPiece: string; 
    status: Status;

}