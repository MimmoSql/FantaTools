import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FtServiceService } from '../ft-service.service';
import { Player } from '../model/objects/Player';
import { User } from '../model/objects/User';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.css']
})
export class TeamPlayerComponent implements OnInit{
  stopPlayer = false;
  searchControllerPlayer = new FormControl();
  searchResultPlayer: Player[] = [];
  searchStatus = true;
  model: FtServiceService;
  teamName =(new URLSearchParams(window.location.search)).get('name') as string;

  isLogin = false;
  public userProfile: KeycloakProfile | null = null;
  public result: User = new User();
  public result2: String[]=[];
  searchStatus2 = true;
  asTeam = false;

  eleName = new FormControl("",[]);

  constructor(private readonly keycloak: KeycloakService, private route : Router,model:FtServiceService){
    this.model = model;
  }

  searchPlayer() {
    this.stopPlayer = true;
    this.model.searchPlayerByTeamRest(
      this.teamName,
      (status: boolean, response: any)=>{
        this.searchStatus = status;
        if(status)
          this.searchResultPlayer = response;
    });
  }

  public async ngOnInit() {
    this.searchPlayer()
    this.userProfile = await this.keycloak.loadUserProfile();

    this.model.showUser(this.userProfile.email as String,this.showUser2.bind(this));
  }

    showUser2(status : boolean,response : User){
    this.searchStatus = status;
      if(status){
        this.result = response;
        this.result.userTeam = response.userTeam;
        
        if(this.result.userTeam != null && this.result.userTeam != undefined){
          this.asTeam = true;
        }
      }
    }

    addPlayer(id:Number){
      this.model.addPlayer(this.result.id,id as number);
    }

}