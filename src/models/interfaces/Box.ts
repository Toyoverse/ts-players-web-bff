import { Parts } from './Parts';
import { Player } from './Player';
import { Toyo } from './Toyo';

export interface Box{
    id: string;
    type: number;
    isOpen: boolean;
    toyo: Toyo;
    hash: string;
    idOpenBox: string;
    idClosedBox: string;
    player: Player;
    parts: Parts;

}