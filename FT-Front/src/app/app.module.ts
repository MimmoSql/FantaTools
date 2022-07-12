import { AppComponent, FooTer } from './app.component';

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamPlayerComponent } from './team-player/team-player.component';
import { AppRoutingModule } from './app-routing.module';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FantaTeamComponent } from './fanta-team/fanta-team.component';
import { AdminComponent } from './admin/admin.component';


export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
      keycloak.init({
          config: {
              url: 'http://localhost:8080',
              realm: 'angular-web',
              clientId: 'angular-web-client',
          },
          initOptions: {
          
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/verify-sso.html'
          }
      });
}


@NgModule({
  declarations: [
    AppComponent,
    FooTer,
    HomeComponent,
    TeamComponent,
    PlayerComponent,
    TeamCardComponent,
    TeamPlayerComponent,
    NavbarComponent,
    UserProfileComponent,
    FantaTeamComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDividerModule,
    KeycloakAngularModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent},
      { path: 'team', component: TeamComponent },
      { path: 'player', component: PlayerComponent },
      { path: 'Allplayer', component: TeamPlayerComponent },
      { path: 'profile', component : UserProfileComponent},
      { path: 'fantaTeam', component: FantaTeamComponent},
      { path: 'admin', component : AdminComponent}
    ])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
