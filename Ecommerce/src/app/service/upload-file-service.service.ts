import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http:HttpClient) { }

  saveFile(data:FormData){
    return this.http.post('http://localhost:4044/produits',data)
  }

  modifFile(data:FormData, id:number){
    return this.http.put('http://localhost:4044/produits/'+id,data)
  }
}
