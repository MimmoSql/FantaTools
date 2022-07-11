import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  isLogin = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService, private route : Router){}

  public async ngOnInit() {
    this.isLogin = await this.keycloak.isLoggedIn();

    if(this.isLogin){
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

}
