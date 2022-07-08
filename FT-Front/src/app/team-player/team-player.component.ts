import { Component, OnInit } from '@angular/core';
import { FtServiceService } from '../ft-service.service';
import { FormControl } from '@angular/forms';
import { Player } from '../model/objects/Player';
import { HttpErrorResponse } from '@angular/common/http';
import { Team } from '../model/objects/Team';
import { TmplAstBoundAttribute } from '@angular/compiler';


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

  constructor(model:FtServiceService) {
    this.model = model;
  }

  ngOnInit(): void {
    this.searchPlayer()
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
}