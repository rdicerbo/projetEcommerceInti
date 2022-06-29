import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role.model';
import { Utilisateur } from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthentificationService {

  constructor(private http:HttpClient,private router:Router) { }

  authUtilisateur(username:string,password:string){
    console.log(username+password);
    return this.http.post<any>('http://localhost:4044/authentification',{username,password});
  }
  
  deconnection(){
    sessionStorage.removeItem('token');
  }

  inscription(utilisateur:Utilisateur){
    return this.http.post<any>('http://localhost:4044/utilisateurs/',utilisateur);
  }

  getRoles(id:number){
    return this.http.get<Role>('http://localhost:4044/roles/'+id);
  }
}
