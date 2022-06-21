import e from 'express';
import BoxModel from './Box.model';
import PartsModel from './Part.model';
import { Player } from './interfaces/Player'
import ToyoModel from './Toyo.model';

export default class PlayerModel implements Player{
    wallet: string;
    token: string;
    expiresAt: Date;
    id: string;
    toyos: ToyoModel[];
    lastUnboxingFinishedAt: Date;
    hasPendingUnboxing: boolean;
    lastUnboxingStartedAt: Date;
    toyoParts: PartsModel[];
    boxes: BoxModel[];

    constructor(){}
    
    getExpiresAtFormatted(expiresAt: Date): string{
        return new Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric'}).format(expiresAt)
    }
}