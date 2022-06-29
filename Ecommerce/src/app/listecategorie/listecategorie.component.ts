import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { GestioncategorieService } from '../service/gestioncategorie.service';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent implements OnInit {

  categories!:Categorie[]; 
  categorie!:Categorie;
  constructor(private cService:GestioncategorieService,private router:Router) { }

  chargercategorie()
  {
    this.cService.getAll().subscribe(
      response=>{
        this.categories=response;
      }
    )
  }

  ngOnInit(): void {
    this.chargercategorie();
    this.categorie=new Categorie(); 
  }

  supprimer(id:number)
  {
    console.log(id)
    this.cService.deleteCategorie(id).subscribe(
      response=>{
        this.chargercategorie();
      }
    )
  }

  modifier(id:number)
  {
    this.router.navigateByUrl('modifierCat/'+id);
  }

  AjouterCat(){
    this.cService.ajouterCategorie(this.categorie).subscribe(
      response=>{
        this.chargercategorie();
      }
    )
  }

  prodAss(id:number){
    this.router.navigateByUrl('prodAss/'+id);
  }

}
