import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { GestioncategorieService } from '../service/gestioncategorie.service';
import { GestionproduitService } from '../service/gestionproduit.service';
import { UploadFileServiceService } from '../service/upload-file-service.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  id!:number
  produit!:Produit
  categories!:Categorie[]

  constructor(private route:ActivatedRoute,
    private cService:GestioncategorieService,
    private pService:GestionproduitService,
    private uService:UploadFileServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.params['id'];
    this.chargerProduit(this.id)
    this.chargerCategorie()
  }

  chargerProduit(id:number)
  {
    this.pService.getByid(id).subscribe(
      response=>this.produit=response
    )
  }

  chargerCategorie()
  {
    this.cService.getAll().subscribe(
      response=>this.categories=response
    )
  }

  modifProd(){
    let formData=new FormData(); 
    formData.append("libProduit",this.produit.libProduit); 
    formData.append("quantite",this.produit.quantite.toString()); 
    formData.append("file",this.produit.img); 
    formData.append("idCat",this.produit.categorie.idCategorie.toString()); 
    this.uService.modifFile(formData,this.id).subscribe(res=>{

    })
    this.router.navigateByUrl('produits');
  }

  selectEvent(event:any):void{
    this.produit.img = event.target.files[0];
  }
}
0.