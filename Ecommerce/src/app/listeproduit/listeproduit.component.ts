import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { GestioncategorieService } from '../service/gestioncategorie.service';
import { GestionproduitService } from '../service/gestionproduit.service';
import { UploadFileServiceService } from '../service/upload-file-service.service';


@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {

  categories!:Categorie[]; 
  produits!:Produit[]; 
  libProduit!:string;
  quantite!:number; 
  selectedValue!:Categorie; 
  selectedFile!: File; 

  constructor(private cService:GestioncategorieService, private pService:GestionproduitService,private uService:UploadFileServiceService, private router:Router) { }

  ngOnInit(): void {
    this.chargerproduit();
    this.chargercategorie();
  }

  chargerproduit()
  {
    this.pService.getAll().subscribe(
      response=>{
        this.produits=response;
      }
    )
  }

  chargercategorie()
  {
    this.cService.getAll().subscribe(
      response=>{
        this.categories=response;
      }
    )
  }

  AjouterProd(){
    let formData=new FormData(); 
    formData.append("libProduit",this.libProduit); 
    formData.append("quantite",this.quantite.toString()); 
    formData.append("idCat",this.selectedValue.idCategorie.toString());
    formData.append("file",this.selectedFile);  
    this.uService.saveFile(formData).subscribe(
      response=>{
        console.log("test reponse")
        this.chargerproduit();
    })
  }

  selectEvent(event:any):void{
    this.selectedFile = event.target.files[0];
  }

  supprimer(id:number)
  {
    console.log(id)
    this.pService.deleteProduit(id).subscribe(
      response=>{
        this.chargerproduit();
      }
    )
  }

  modifier(id:number)
  {
    this.router.navigateByUrl('modifierProd/'+id);
  }

  catAss(id:number)
  {
    this.router.navigateByUrl('catAss/'+id);
  }


}
