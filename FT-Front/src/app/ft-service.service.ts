import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './model/objects/Team';
import { ADDRESS_STORE_SERVER,REQUEST_TEAM_ALL,REQUEST_TEAM_BYNAME,REQUEST_TEAM_ADD,REQUEST_TEAM_DELETE,REQUEST_PLAYER_BYTEAM,REQUEST_PLAYER_BYLASTNAME,REQUEST_PLAYER_ADD,REQUEST_PLAYER_DELETE, DO_LOGIN } from './model/support/Constant';
import { RestManager } from './model/managers/RestManager';
import { User } from './model/objects/User';


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
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER, REQUEST_TEAM_BYNAME, {name: name}, callback);
  }

  public addTeamRest(team:Team, callback: any){
    this.restManager.makePostRequest(ADDRESS_STORE_SERVER,REQUEST_TEAM_ADD, team, callback);
  }

  //PlayerRest
  public searchPlayerByTeamRest(name:string, callback: any){
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER, REQUEST_PLAYER_BYTEAM, {team : name}, callback);
  }

  //LoginHTTP
  public doLoginHttp(username: string, password: string){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set("username", username);
    body = body.set("password", password);
    this.http.post(ADDRESS_STORE_SERVER+DO_LOGIN, body, {headers: myheader}).subscribe();
  }

  //TeamHTTP
  public searchAllTeam():Observable<Team[]>{
    return this.http.get<Team[]>(ADDRESS_STORE_SERVER+REQUEST_TEAM_ALL);
  }

  public searchTeamByName(name:string):Observable<Team>{
    let params = new HttpParams().set('name', name);
    return this.http.get<Team>(ADDRESS_STORE_SERVER+REQUEST_TEAM_BYNAME,{params});
  }

  public addTeam(team:Team):Observable<Team>{
    return this.http.post<Team>(ADDRESS_STORE_SERVER+REQUEST_TEAM_ADD,team);
  }
}