import { ToyoPersona } from "./interfaces/ToyoPersona";

export default class ToyoPersonaModel implements ToyoPersona{
    id: string;
    name: string;
    thumbnail: string;
    video: string;
    bodyType: number;

    constructor(){}
    
}