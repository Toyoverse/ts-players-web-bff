import { ToyoPersona } from "./interfaces/ToyoPersona";

export default class ToyoPersonaModel implements ToyoPersona{
    private _id: string;
    private _name: string;
    private _thumbnail: string;
    private _video: string;
    private _bodyType: number;

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
    get thumbnail(): string{
        return this._thumbnail;
    }
    set thumbnail(thumbnail: string){
        this._thumbnail = thumbnail;
    }
    get video(): string{
        return this._video;
    }
    set video(video: string){
        this._video = video;
    }
    get bodyType(): number{
        return this._bodyType;
    }
    set bodyType(bodyType: number){
        this._bodyType = bodyType;
    }

}