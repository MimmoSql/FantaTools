import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FtServiceService } from '../ft-service.service';
import { Player } from '../model/objects/Player';
import { Team } from '../model/objects/Team';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  model : FtServiceService;
  public name : string = "";
  public role : string = "";
  public goal : number = 0;
  public assist : number = 0;
  public pres : number = 0;
  public yellow : number = 0;
  public red : number = 0;
  public t : string = "";

  public controllerName= new FormControl("",[]);
  public controllerRole= new FormControl("",[]);
  public controllerGoal= new FormControl(0,[]);
  public controllerAssist= new FormControl(0,[]);
  public controllerPres= new FormControl(0,[]);
  public controllerYellow= new FormControl(0,[]);
  public controllerRed= new FormControl(0,[]);
  public controllerT= new FormControl("",[]);

  public p : Player = new Player;
  public team : Team = new Team;

  constructor(model : FtServiceService) {
    this.model=model;
   }

  ngOnInit(): void {
  }

  creaPlayer(){
    this.name = this.controllerName.value as string;
    this.role = this.controllerRole.value as string;
    this.goal = this.controllerGoal.value as number;
    this.assist = this.controllerAssist.value as number;
    this.pres = this.controllerPres.value as number;
    this.yellow = this.controllerYellow.value as number;
    this.red = this.controllerRed.value as number;
    this.t = this.controllerT.value as string;

    this.p.name = this.name;
    this.p.role = this.role;
    this.p.goalsScored = this.goal;
    this.p.assistsMade = this.assist;
    this.p.presence = this.pres;
    this.p.yellow = this.yellow
    this.p.red = this.red
    this.team.name = this.t;
    this.p.team = this.team

    this.model.createPlayer(this.p);

  }

  eliminaPlayer(){
    this.name = this.controllerName.value as string;
    this.role = this.controllerRole.value as string;
    this.goal = this.controllerGoal.value as number;
    this.assist = this.controllerAssist.value as number;
    this.pres = this.controllerPres.value as number;
    this.yellow = this.controllerYellow.value as number;
    this.red = this.controllerRed.value as number;
    this.t = this.controllerT.value as string;

    this.p.name = this.name;
    this.p.role = this.role;
    this.p.goalsScored = this.goal;
    this.p.assistsMade = this.assist;
    this.p.presence = this.pres;
    this.p.yellow = this.yellow
    this.p.red = this.red
    this.team.name = this.t;
    this.p.team = this.team

    this.model.deletePlayer(this.p);

  }

}
