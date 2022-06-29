import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { Role } from '../model/role.model';
import { Utilisateur } from '../model/utilisateur.model';
import { BasicAuthentificationService } from '../service/basic-authentification.service';
import { GestionproduitService } from '../service/gestionproduit.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  username!:string;
  password!:string;
  validUser=false; 
  
  constructor(private bAuthService:BasicAuthentificationService, private pService:GestionproduitService, private router:Router) { }

  ngOnInit(): void {
  }

  
  login(){
    console.log(this.username);
    console.log(this.password);
    this.bAuthService.authUtilisateur(this.username,this.password)
    .subscribe(
      data =>
      {
        sessionStorage.setItem('token','Bearer '+data.jwt);
        console.log("test");
        this.router.navigateByUrl('categories');
        this.validUser=false;
      },
      error =>{
        console.log("ko");
        this.validUser=true; 
      }
    );
  }

  inscr(){
    this.router.navigateByUrl('inscription');
  }

  retour(){
    this.router.navigateByUrl('pagePrincipale');
  }


}