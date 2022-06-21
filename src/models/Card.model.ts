import {Card } from './interfaces/Card'

export default class CardModel implements Card{
    private _id: string;
    private _attackType: string;
    private _image: string;
    private _cardType: string;
    private _name: string;
    private _cost: number;
    private _attackSubType: string;
    private _duration: number;
    private _defenseType: string;
    private _attackAnimation: string;
    private _effectName: string;
    private _applyEffect: boolean;

    constructor(){}

    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get attackType(): string{
        return this._attackType;
    }
    set attackType(attackType: string){
        this._attackType = attackType;
    }   
    get image(): string{
        return this._image;
    }
    set image(image: string){
        this._image = image;
    }
    get cardType(): string{
        return this._cardType;
    }
    set cardType(cardType: string){
        this._cardType = cardType;
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get cost(): number{
        return this._cost;
    }
    set cost(cost: number){
        this._cost = cost;
    }
    get attackSubType(): string{
        return this._attackSubType;
    }
    set attackSubType(attackSubType: string){
        this._attackSubType = attackSubType;
    }
    get duration(): number{
        return this._duration;
    }
    set duration(duration: number){
        this._duration = duration;
    }
    get defenseType(): string{
        return this._defenseType;
    }
    set defenseType(defenseType: string){
        this._defenseType = defenseType;
    }
    get attackAnimation(): string{
        return this._attackAnimation;
    }
    set attackAnimation(attackAnimaiton: string){
        this._attackAnimation = attackAnimaiton;
    }
    get effectName(): string{
        return this._effectName;
    }
    set effectName( effectName: string){
        this._effectName = effectName;
    }
    get applyEffect(): boolean{
        return this._applyEffect;
    }
    set applyEffect(applyEffect: boolean){
        this._applyEffect = applyEffect;
    }
    
}