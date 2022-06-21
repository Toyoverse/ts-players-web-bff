import {Card } from './interfaces/Card'

export default class CardModel implements Card{
    id: string;
    attackType: string;
    image: string;
    cardType: string;
    name: string;
    cost: number;
    attackSubType: string;
    duration: number;
    defenseType: string;
    attackAnimation: string;
    effectName: string;
    applyEffect: boolean;

    constructor(){}
    
}