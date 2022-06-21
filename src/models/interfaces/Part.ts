import { Card } from "./Card";
import { ToyoPersona } from "./ToyoPersona";

export interface Parts{
    id: string;
    bonusStats: object;
    toyoTechnoalloy: string;
    cards: Card[];
    toyoPersona: ToyoPersona;
    toyoPiece: string; 
    status: object;

}