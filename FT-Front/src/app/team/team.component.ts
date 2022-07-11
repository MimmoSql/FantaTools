import { Component, OnInit } from '@angular/core';
import { FtServiceService } from '../ft-service.service';
import { Team } from '../model/objects/Team';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  implements OnInit{
  stopTeam = false;
  searchControllerTeam = new FormControl();
  searchResultTeam: Team[] = [];
  searchStatus = true;
  model: FtServiceService;

  oldSearchStatus = false;
  oldSearchResult!: Team[];

  constructor(model:FtServiceService) {
    this.model=model;
  }

  ngOnInit(): void {
    this.searchTeam();
  }
  /*
  oldSearchTeam(){
    this.model.searchAllTeam().subscribe({
      next: (response: Team[]) => {
        this.oldSearchStatus = true;
        this.oldSearchResult.;
      }
    });
  }*/

  searchTeam(){
    this.stopTeam = true;
    this.model.searchAllTeamRest(
      (status: boolean, response: any)=>{
        this.searchStatus = status;
        if(status)
          this.searchResultTeam = response;
    });
  }
}
