import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from './model/objects/Team';
import { ADDRESS_STORE_SERVER,REQUEST_TEAM_ALL,REQUEST_TEAM_BYNAME,REQUEST_TEAM_ADD,REQUEST_TEAM_DELETE,REQUEST_PLAYER_BYTEAM, ADD_USER, SHOW_USER, SHOW_USER_PLAYER, ADD_TEAM } from './model/support/Constant';
import { RestManager } from './model/managers/RestManager';
import { User } from './model/objects/User';
import { KeycloakProfile } from 'keycloak-js';


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

  /*LoginHTTP
  public doLoginHttp(username: string, password: string){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set("username", username);
    body = body.set("password", password);
    this.http.post(ADDRESS_STORE_SERVER+DO_LOGIN, body, {headers: myheader}).subscribe();
  }*/

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

  public addUser(userProfile : KeycloakProfile|null){
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    let user = new User();
    user.name = userProfile?.firstName as string;
    user.lastName = userProfile?.lastName as string;
    user.email = userProfile?.email as string;
    user.username = userProfile?.username as string;
    let body = JSON.stringify(user);
   
   this.http.post(ADDRESS_STORE_SERVER+ADD_USER, body, {headers: myheader}).subscribe();
  }

  public showUser(email:String,callback: any){
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER,SHOW_USER,{email:email},callback);
  }

  public showUserPlayer(username:String,callback: any){
    this.restManager.makeGetRequest(ADDRESS_STORE_SERVER,SHOW_USER_PLAYER,{username:username},callback);
  }

  public createTeam(email: string, nameTeam : string){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'); 
    let body = new HttpParams();
    body = body.set("email",email);
    body = body.set("name",nameTeam);
    this.http.post(ADDRESS_STORE_SERVER+ADD_TEAM,body,{headers:myheader}).subscribe();
  }


}