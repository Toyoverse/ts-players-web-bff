import { Status } from "./interfaces/Status";

export default class StatusModel implements Status{
    private _vitality?: number;
    private _resistance?: number;
    private _resilence?: number;
    private _physicalStrength?: number;
    private _cyberForce?: number;
    private _technique?: number;
    private _analysis?: number;
    private _agility?: number;
    private _speed?: number;
    private _precision?: number;
    private _stamina?: number;
    private _luck?: number;

    constructor(){}

    get vitality(): number{
        return this._vitality;
    }
    set vitality(vitality: number){
        this._vitality = vitality;
    }
    get resistance(): number{
        return this._resistance;
    }
    set resistance(resistance: number){
        this._resistance = resistance;
    }
    get resilence(): number{
        return this._resilence;
    }
    set resilence(resilence: number){
        this._resilence = resilence;
    }
    get physicalStrength(): number{
        return this._physicalStrength;
    }
    set physicalStrength(physicalStrength: number){
        this._physicalStrength = physicalStrength;
    }
    get cyberForce(): number{
        return this._cyberForce;
    }
    set cyberForce(cyberForce: number){
        this._cyberForce = cyberForce;
    }
    get technique(): number{
        return this._technique;
    }
    set tecnique(technique: number){
        this._technique = technique;
    }
    get analysis(): number{
        return this._analysis;
    }
    set analysis(analysis: number){
        this._analysis = analysis
    }
    get agility(): number{
        return this._agility;
    }
    set agility(agility: number){
        this._agility = agility;
    }
    get speed(): number{
        return this._speed;
    }
    set speed(speed: number){
        this._speed = speed;
    }
    get precision(): number{
        return this._precision;
    }
    set precision(precision: number){
        this._precision = precision;
    }
    get stamina(): number{
        return this._stamina;
    }
    set stamina(stamina: number){
        this._stamina = stamina;
    }
    get luck(): number{
        return this._luck;
    }
    set luck(luck: number){
        this.luck = luck;
    }
}