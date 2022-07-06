import { Team } from "./Team";

export class Player{
    id! : Number;
    name! : String;
    lastName! : String;
    number! : Number;
    goalsScored! : Number;
    assistsMade! : Number;
    role! : String;
    urlImg! : String;
    team? : Team;
}