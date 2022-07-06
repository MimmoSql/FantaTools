import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Team } from './model/objects/Team';
import { Player } from './model/objects/Player';
import { ADDRESS_STORE_SERVER,REQUEST_TEAM_ALL,REQUEST_TEAM_BYNAME,REQUEST_TEAM_ADD,REQUEST_TEAM_DELETE,REQUEST_PLAYER_BYTEAM,REQUEST_PLAYER_BYLASTNAME,REQUEST_PLAYER_ADD,REQUEST_PLAYER_DELETE } from './model/support/Constant';
import { RestManager } from './model/managers/RestManager';

@Injectable({
  providedIn: 'root'
})
export class FtServiceService {
  restManager: RestManager;

  constructor(private http: HttpClient) {
    this.restManager = new RestManager(http);
  }

  //TeamRest
  public searchAllTeamRest(callback: any){
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER,REQUEST_TEAM_ALL, {}, callback);
  }

  public searchByTeamNameRest(name:string, callback: any){
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER, REQUEST_TEAM_BYNAME, {param: new HttpParams().set('name', name)}, callback);
  }

  public addTeamRest(team:Team, callback: any){
    this.restManager.makePostRequest(ADDRESS_STORE_SERVER,REQUEST_TEAM_ADD, team, callback);
  }

  //Team
  public searchAllTeam():Observable<Team[]>{
    return this.http.get<Team[]>(ADDRESS_STORE_SERVER+REQUEST_TEAM_ALL);
  }

  public searcTeamByName(name:string):Observable<Team[]>{
    let params = new HttpParams().set('name', name);
    return this.http.get<Team[]>(ADDRESS_STORE_SERVER+REQUEST_TEAM_BYNAME,{params});
  }

  public addTeam(team:Team):Observable<Team>{
    return this.http.post<Team>(ADDRESS_STORE_SERVER+REQUEST_TEAM_ADD,team);
  }

  /*
    public deleteTeam(team:Team):Observable<Team>{
      return this.http.delete<Team>(ADDRESS_STORE_SERVER+REQUEST_TEAM_DELETE,team);
    }
  */

  //player

}
