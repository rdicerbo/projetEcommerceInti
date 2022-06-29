import { Role } from "./role.model";

export class Utilisateur
{
    id!:number;
	nom!:string;
    prenom!:string;
    dateNaissance!:string;
    username!:string;
    password!:string;
    role!:Role;

}