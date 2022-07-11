import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import {Router} from '@angular/router'; 
import { KeycloakProfile } from 'keycloak-js';
import { FtServiceService } from '../ft-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin = false;
  public userProfile : KeycloakProfile | null = null;
  public model:FtServiceService
  constructor(private readonly keycloak: KeycloakService, private route : Router, model : FtServiceService) {
    this.model = model;
  }

  public okStatus = true;

  public async ngOnInit() {

    this.isLogin = await this.keycloak.isLoggedIn();

    type rolesUsuarios = Array<{id: number, text: string}>;

    if (this.isLogin) {
      this.userProfile = await this.keycloak.loadUserProfile();

      (document.getElementById("logout-btn") as HTMLButtonElement).removeAttribute('hidden');
      (document.getElementById("login-btn") as HTMLButtonElement).setAttribute('hidden', '');

      console.log(this.userProfile);

      this.model.addUser(this.userProfile);

    }
    else{
      (document.getElementById("login-btn") as HTMLButtonElement).removeAttribute('hidden');
      (document.getElementById("logout-btn") as HTMLButtonElement).setAttribute('hidden', '');
    }
  }

  public showUser(status : boolean, response : any){
    this.okStatus = status;
  }

  public startSession() {
    this.keycloak.login();
  }

  public stopSession(){
    this.keycloak.logout();
  }
}