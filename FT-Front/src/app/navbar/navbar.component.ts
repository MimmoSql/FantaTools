import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {

    this.isLogin = await this.keycloak.isLoggedIn();

    type rolesUsuarios = Array<{id: number, text: string}>;

    if (this.isLogin) {
      this.userProfile = await this.keycloak.loadUserProfile();
      (document.getElementById("logout-btn") as HTMLButtonElement).removeAttribute('hidden');
      (document.getElementById("login-btn") as HTMLButtonElement).setAttribute('hidden', '');
    }
    else{
      (document.getElementById("login-btn") as HTMLButtonElement).removeAttribute('hidden');
      (document.getElementById("logout-btn") as HTMLButtonElement).setAttribute('hidden', '');
    }
  }

  public startSession() {
    this.keycloak.login();
  }

  public stopSession(){
    this.keycloak.logout();
  }
}