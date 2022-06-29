import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Panier } from '../model/panier.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier!:Panier; 

  constructor(private router:Router) { }


  ngOnInit(): void {

    this.panier=JSON.parse(sessionStorage['panier']); 
   
  }

}
