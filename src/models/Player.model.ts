import e from 'express';
import BoxModel from './Box.model';
import PartsModel from './Part.model';
import { Player } from './interfaces/Player'
import ToyoModel from './Toyo.model';

export default class PlayerModel implements Player{
    private _wallet: string;
    private _token: string;
    private _expiresAt: Date;
    private _id: string;
    private _toyos: ToyoModel;
    private _lastUnboxingFinishedAt: Date;
    private _hasPendingUnboxing: boolean;
    private _lastUnboxingStartedAt: Date;
    private _toyoParts: PartsModel[];
    private _boxes: BoxModel;

    constructor(){}

    get wallet(): string{
        return this._wallet;
    }

    set wallet(wallet: string){
        this._wallet = wallet;
    }

    get token(): string{
        return this._token;
    }
    
    set token(token: string){
        this._token = token;
    }

    get expiresAt(): Date{
        return this._expiresAt;
    }
    
    set expiresAt(expiresAt: Date){
        this._expiresAt = expiresAt;
    }
    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get toyos(): ToyoModel{
        return this._toyos;
    }
    set toyos(toyos: ToyoModel){
        this._toyos = toyos;
    }
    get lastUnboxingFinishedAt(): Date{
        return this._lastUnboxingFinishedAt;
    }
    set lastUnboxingFinishedAt(lastUnboxingFinishedAt: Date){
        this._lastUnboxingFinishedAt = lastUnboxingFinishedAt;
    }
    get hasPendingUnboxing(): boolean{
        return this._hasPendingUnboxing;
    }
    get lastUnboxingStartedAt(): Date{
        return this._lastUnboxingStartedAt;
    }
    set lastUnboxiingStartedAt(lastUnboxiingStartedAt: Date){
        this._lastUnboxingStartedAt = lastUnboxiingStartedAt;
    }
    get toyoParts(): PartsModel[]{
        return this._toyoParts;
    }
    set toyoParts(toyoParts: PartsModel[]){
        this._toyoParts = toyoParts;
    }
    get boxes(): BoxModel{
        return this._boxes;
    }
    set boxes(boxes: BoxModel){
        this._boxes = boxes;
    }
    
    getExpiresAtFormatted(expiresAt: Date): string{
        return new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'}).format(expiresAt)
    }
}