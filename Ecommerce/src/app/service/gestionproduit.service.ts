import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class GestionproduitService {

  constructor(private http:HttpClient) { }

  getAll()
  {
   return this.http.get<Produit[]>('http://localhost:4044/produits');
  }

  deleteProduit(id:number)
  {
    return this.http.delete('http://localhost:4044/produits/'+id);
  }

  getByid(id:number)
  {
    return this.http.get<Produit>('http://localhost:4044/produits/'+id);
  }

  modifierProduit(produit:Produit)
  {
    return this.http.put<any>('http://localhost:4044/produits/',produit);
  }

  ajouterProduit(produit:Produit)
  {
    return this.http.post<any>('http://localhost:4044/produits/',produit);
  }

  getByIdCat(id:number)
  {
    return this.http.get<Produit[]>('http://localhost:4044/produitsByIdCat/'+id);
  }
}
