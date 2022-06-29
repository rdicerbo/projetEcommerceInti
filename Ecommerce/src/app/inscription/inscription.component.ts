import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur.model';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  utilisateur!:Utilisateur;

  constructor(private bAuthService:BasicAuthentificationService, private router:Router) { }

  ngOnInit(): void {
    this.utilisateur=new Utilisateur(); 
  }

  inscription(){
    console.log(this.utilisateur.nom)
    console.log(this.utilisateur.prenom)
    console.log(this.utilisateur.password)
    console.log(this.utilisateur.username)
    this.bAuthService.inscription(this.utilisateur).subscribe();
    this.router.navigateByUrl('categories');
  }

  retour(){
    this.router.navigateByUrl('connection');
  }
}
