import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lignePanier } from '../model/lignePanier.model';
import { Panier } from '../model/panier.model';
import { Produit } from '../model/produit.model';
import { GestionproduitService } from '../service/gestionproduit.service';

@Component({
  selector: 'app-pageprincipale',
  templateUrl: './pageprincipale.component.html',
  styleUrls: ['./pageprincipale.component.css']
})
export class PageprincipaleComponent implements OnInit {
  produits!:Produit[]; 
  panier!:Panier; 
  lignePanier!:lignePanier; 
  initPanier=false; 
  quantite!:number; 

  constructor( private pService:GestionproduitService, private router:Router) { }


  ngOnInit(): void {
    this.chargerproduit(); 

    this.panier=new Panier; 
    this.panier.idPanier=1; 
    this.lignePanier=new lignePanier; 

    if(this.initPanier){
      //Recuperation du panier
        this.panier=JSON.parse(sessionStorage['panier']); 
    }else{
      //Creation du panier
        sessionStorage.setItem('panier',JSON.stringify(this.panier)); 
        this.initPanier=true; 
    }
  }

  addPanier(id:number){
    this.pService.getByid(id).subscribe(
      response =>{
        this.lignePanier.produit=response; 
        this.lignePanier.quantite=this.quantite; 
        console.log(this.initPanier)
        console.log(this.lignePanier.quantite);
        console.log(this.lignePanier.produit.libProduit);
        console.log(this.panier.idPanier)

        this.panier.lignePaniers.push(this.lignePanier); 
        sessionStorage.setItem('panier',JSON.stringify(this.panier)); 

        console.log(this.lignePanier.quantite);
        console.log(this.lignePanier.produit.libProduit);
        console.log(this.panier.lignePaniers[0].produit.libProduit); 
      }
    )
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
