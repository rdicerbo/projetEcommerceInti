import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit.model';
import { GestionproduitService } from '../service/gestionproduit.service';

@Component({
  selector: 'app-pageclient',
  templateUrl: './pageclient.component.html',
  styleUrls: ['./pageclient.component.css']
})
export class PageclientComponent implements OnInit {
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
