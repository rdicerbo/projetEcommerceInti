import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { GestionproduitService } from '../service/gestionproduit.service';

@Component({
  selector: 'app-pageadmin',
  templateUrl: './pageadmin.component.html',
  styleUrls: ['./pageadmin.component.css']
})
export class PageadminComponent implements OnInit {
  produits!:Produit[]; 

  constructor( private pService:GestionproduitService, private router:Router) { }


  ngOnInit(): void {
    this.chargerproduit(); 
  }

  chargerproduit()
  {
    this.pService.getAll().subscribe(
      response=>{
        this.produits=response;
      }
    )
  }
}
