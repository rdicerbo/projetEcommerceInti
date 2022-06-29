import { Panier } from "./panier.model";
import { Produit } from "./produit.model";

export class lignePanier
{
    idLignePanier!:number;
    panier!:Panier;
    produit!:Produit; 
    quantite!:number; 
}