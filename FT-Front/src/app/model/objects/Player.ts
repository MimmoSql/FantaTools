import { Team } from "./Team";

export class Player{
    id! : Number;
    name! : String;
    role! : String;
    goalsScored! : Number;
    assistsMade! : Number;
    presence! : Number;
    yellow! : Number;
    red! : Number;
    team? : Team;
}