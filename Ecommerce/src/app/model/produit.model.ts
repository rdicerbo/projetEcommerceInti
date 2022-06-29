import { Categorie } from "./categorie.model";

export class Produit
{
    idProduit!:number;
	libProduit!:string;
    img!:File;
    quantite!:number; 
    categorie!:Categorie;
}