import PartsModel from "./Part.model";
import { Toyo } from "./interfaces/Toyo";

export default class ToyoModel implements Toyo{
    private _id: string;
    private _name: string;
    private _parts: PartsModel[];
    private _hasTenParts: boolean;
    private _isToyoSelected: boolean;
    
    constructor(){}
    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get parts(): PartsModel[]{
        return this._parts;
    }
    set parts(parts: PartsModel[]){
        this._parts = parts;
    }
    get hasTenParts(): boolean{
        return this._hasTenParts;
    }
    set hasTenParts(hasTenParts: boolean){
        this._hasTenParts = hasTenParts;
    }
    get isToyoSelected(): boolean{
        return this._isToyoSelected;
    }
    set isToyoSelected(isToyoSelected: boolean){
        this._isToyoSelected = isToyoSelected;
    }

    
}