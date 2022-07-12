import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { FtServiceService } from '../ft-service.service';
import { User } from '../model/objects/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  isLogin = false;
  public userProfile: KeycloakProfile | null = null;
  public model :FtServiceService;
  public result: User = new User();
  public teamName: string = "";
  searchStatus = true;
  public nameTController= new FormControl("",[]);
  public nameT= "";

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
      this.teamName = response.userTeam as string;
    }
  }

  setTema(){
    this.nameT = (document.getElementById("nameT") as HTMLInputElement).value as string;
    console.log(this.nameT.valueOf() + " " + this.nameT)
    this.model.createTeam(this.result.email,this.nameT);
  }

}
