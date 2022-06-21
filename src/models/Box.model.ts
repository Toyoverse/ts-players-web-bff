import { Box } from "./interfaces/Box";
import PartsModel from "./Part.model";
import PlayerModel from "./Player.model";
import { Toyo } from "./interfaces/Toyo";

export default class BoxModel implements Box{
    id: string;
    type: number;
    isOpen: boolean;
    toyo: Toyo;
    hash: string;
    idOpenBox: string;
    idClosedBox: string;
    player: PlayerModel;
    parts: PartsModel[];
    
    constructor(){}
    
}
