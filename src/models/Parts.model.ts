import CardModel from "./Card.model";
import { Parts } from "./interfaces/Parts";
import StatusModel from "./Status.model";
import ToyoPersonaModel from "./ToyoPersona.model";

export default class PartsModel implements Parts{
    private _id: string;
    private _bonusStatus: StatusModel;
    private _toyoTecnhnoalloy: string;
    private _cards: CardModel[];
    private _toyoPersona: ToyoPersonaModel;
    private _toyoPiece: string;
    private _status: StatusModel;

    constructor(){}
    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get bonusStatus(): StatusModel{
        return this._bonusStatus;
    }
    set bonusStatus(bonusStatus: StatusModel){
        this._bonusStatus = bonusStatus;
    }
    get toyoTecnhnoalloy(): string{
        return this._toyoTecnhnoalloy;
    }
    set toyoTechnoalloy(toyoTechnoalloy: string){
        this._toyoTecnhnoalloy = toyoTechnoalloy;
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
    get status(): StatusModel{
        return this._status;
    }
    set status(status: StatusModel){
        this._status = status;
    }
    
    
}