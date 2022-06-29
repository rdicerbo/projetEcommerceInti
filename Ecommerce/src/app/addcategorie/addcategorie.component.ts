import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { GestioncategorieService } from '../service/gestioncategorie.service';

@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {

 
  idcat!:number
  categorie!:Categorie

  constructor(private route:ActivatedRoute,
    private cService:GestioncategorieService,
    private router:Router) { }

  ngOnInit(): void {
    this.idcat=+this.route.snapshot.params['id'];
    this.chargerCategorie(this.idcat)
  }

  chargerCategorie(id:number)
  {
    this.cService.getByid(id).subscribe(
      response=>this.categorie=response
    )

  }

  modifierCat()
  {
    this.cService.modifierCategorie(this.categorie).subscribe(
      response=>{
        this.router.navigateByUrl('categories');
      }
    )
  }

  

}

