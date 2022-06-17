import e from 'express';
import { Player } from './interfaces/Player'

export default class PlayerModel implements Player{
    private _wallet: string;
    private _token: string;
    private _expiresAt: Date;

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

    getExpiresAtFormatted(expiresAt: Date): string{
        return new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'}).format(expiresAt)
    }
}