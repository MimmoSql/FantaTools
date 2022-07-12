import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { FtServiceService } from '../ft-service.service';
import { Player } from '../model/objects/Player';
import { User } from '../model/objects/User';

@Component({
  selector: 'app-fanta-team',
  templateUrl: './fanta-team.component.html',
  styleUrls: ['./fanta-team.component.css']
})
export class FantaTeamComponent implements OnInit {

  isLogin = false;
  public userProfile: KeycloakProfile | null = null;
  public model :FtServiceService;
  public result: User = new User();
  public result2: String[]=[];
  searchStatus = true;
  searchStatus2 = true;
  asTeam = false;

  constructor(private readonly keycloak: KeycloakService, private route : Router,model:FtServiceService){
    this.model = model;
  }


  public async ngOnInit() {
    
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



    mostra(){
      this.model.showUserPlayer(this.result.username as string, this.showPlayer.bind(this))
      console.log(this.result2.length+ "AJOPOOOOOO")
    }

    showPlayer(status:boolean, response:any){
      this.searchStatus2 = status;
      console.log("cioa")
      if(true){
        this.result2 = response as String[];
        console.log("wee"+this.result2.forEach(Element => console.log(Element)))
      }
    }
}
