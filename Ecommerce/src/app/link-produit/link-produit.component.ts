import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { GestionproduitService } from '../service/gestionproduit.service';

@Component({
  selector: 'app-link-produit',
  templateUrl: './link-produit.component.html',
  styleUrls: ['./link-produit.component.css']
})
export class LinkProduitComponent implements OnInit {

  produits!:Produit[]; 
  id!:number; 

  constructor(private route:ActivatedRoute, private pService:GestionproduitService ,private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.chargerproduit(this.id);
  }

  chargerproduit(id:number)
  {
    this.pService.getByIdCat(id).subscribe(
      response=>{
        this.produits=response;
      }
    )
  }

  retour(){
    this.router.navigateByUrl('categories');
  }


}
