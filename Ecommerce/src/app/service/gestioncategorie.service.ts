import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class GestioncategorieService {

  constructor(private http:HttpClient) { }

  getAll()
  {
   return this.http.get<Categorie[]>('http://localhost:4044/categories');
  }

  deleteCategorie(id:number)
  {
    return this.http.delete('http://localhost:4044/categories/'+id);
  }

  getByid(id:number)
  {
    return this.http.get<Categorie>('http://localhost:4044/categories/'+id);
  }

  modifierCategorie(categorie:Categorie)
  {
    return this.http.put('http://localhost:4044/categories/',categorie);
  }

  ajouterCategorie(categorie:Categorie)
  {
    return this.http.post('http://localhost:4044/categories/',categorie);
  }
}
