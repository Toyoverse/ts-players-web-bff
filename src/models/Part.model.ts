import CardModel from "./Card.model";
import { Parts } from "./interfaces/Part";
import ToyoPersonaModel from "./ToyoPersona.model";

export default class PartModel implements Parts{
    id: string;
    bonusStats: object;
    toyoTechnoalloy: string;
    cards: CardModel[];
    toyoPersona: ToyoPersonaModel;
    toyoPiece: string;
    status: object;

    constructor(){}
   
}