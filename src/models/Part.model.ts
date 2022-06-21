import CardModel from "./Card.model";
import { Parts } from "./interfaces/Part";
import ToyoPersonaModel from "./ToyoPersona.model";

export default class PartModel implements Parts{
    private _id: string;
    private _bonusStats: object;
    private _toyoTechnoalloy: string;
    private _cards: CardModel[];
    private _toyoPersona: ToyoPersonaModel;
    private _toyoPiece: string;
    private _status: object;

    constructor(){}
    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get bonusStats(): object{
        return this._bonusStats;
    }
    set bonusStats(bonusStats: object){
        this._bonusStats = bonusStats;
    }
    get toyoTechnoalloy(): string{
        return this._toyoTechnoalloy;
    }
    set toyoTechnoalloy(toyoTechnoalloy: string){
        this._toyoTechnoalloy = toyoTechnoalloy;
    }
    get cards(): CardModel[]{
        return this._cards;
    }
    set cards(cards: CardModel[]){
        this._cards = cards;
    }
    get toyoPersona(): ToyoPersonaModel{
        return this._toyoPersona;
    }
    set toyoPersona(toyoPersona: ToyoPersonaModel){
        this._toyoPersona = toyoPersona;
    }
    get toyoPiece(): string{
        return this._toyoPiece;
    }
    set toyoPiece(toyoPiece: string){
        this._toyoPiece = toyoPiece;
    }
    get status(): object{
        return this._status;
    }
    set status(status: object){
        this._status = status;
    }
    
    
}