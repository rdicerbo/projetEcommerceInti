import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { GestioncategorieService } from '../service/gestioncategorie.service';

@Component({
  selector: 'app-link-categorie',
  templateUrl: './link-categorie.component.html',
  styleUrls: ['./link-categorie.component.css']
})
export class LinkCategorieComponent implements OnInit {

  categorie!:Categorie; 
  id!:number; 

  constructor(private route:ActivatedRoute, private cService:GestioncategorieService ,private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.chargercategorie(this.id); 
  }

  chargercategorie(id:number)
  {
    this.cService.getByid(id).subscribe(
      response=>{
        this.categorie=response;
      }
    )
  }

  retour(){
    this.router.navigateByUrl('produits');
  }

}
