import { AppComponent,NavBar, FooTer } from './app.component';

import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    FooTer,
    HomeComponent,
    TeamComponent,
    PlayerComponent,
    TeamCardComponent,
    TeamPlayerComponent
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'player', component: PlayerComponent },
      {path: 'Allplayer', component: TeamPlayerComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
