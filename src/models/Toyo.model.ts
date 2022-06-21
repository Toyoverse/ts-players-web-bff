import PartsModel from "./Part.model";
import { Toyo } from "./interfaces/Toyo";

export default class ToyoModel implements Toyo{
    id: string;
    name: string;
    parts: PartsModel[];
    hasTenParts: boolean;
    isToyoSelected: boolean;
    
    constructor(){}
    
}