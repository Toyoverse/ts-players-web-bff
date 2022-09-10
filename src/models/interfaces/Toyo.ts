import { Parts } from "./Parts";

export interface Toyo{
    id: string;
    name: string;
    parts: Parts[];
    hasTenParts: boolean;
    isToyoSelected: boolean;
}