import { Box } from "./interfaces/Box";
import PartsModel from "./Parts.model";
import PlayerModel from "./Player.model";
import { Toyo } from "./interfaces/Toyo";

export default class BoxModel implements Box{
    private _id: string;
    private _type: number;
    private _isOpen: boolean;
    private _toyo: Toyo;
    private _hash: string;
    private _idOpenBox: string;
    private _idClosedBox: string;
    private _player: PlayerModel;
    private _parts: PartsModel;
    
    constructor(){}

    get id(): string{
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }

    get type(): number{
        return this._type;
    }
    set type(type: number){
        this._type = type;
    }
    get isOpen(): boolean{
        return this._isOpen;
    }
    set isOpen(isOpen: boolean){
        this._isOpen = isOpen;
    }
    get toyo(): Toyo{
        return this._toyo;
    }
    set toyo(toyo: Toyo){
        this._toyo = toyo;
    }
    get hash(): string{
        return this._hash;
    }
    set hash(hash: string){
        this._hash = hash;
    }
    get idOpenBox(): string{
        return this._idOpenBox;
    }
    set idOpenBox(idOpenBox){
        this._idOpenBox = idOpenBox;
    }
    get idClosedBox(): string{
        return this._idClosedBox;
    }
    set idClosedBox(idClosedBox: string){
        this._idClosedBox = idClosedBox;
    }
    get player(): PlayerModel{
        return this._player;
    }
    set player(player: PlayerModel){
        this._player = player;
    }
    get parts(): PartsModel{
        return this._parts;
    }
    set parts(parts: PartsModel){
        this._parts = parts;
    }
}
