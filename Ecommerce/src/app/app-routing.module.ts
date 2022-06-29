import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LinkCategorieComponent } from './link-categorie/link-categorie.component';
import { LinkProduitComponent } from './link-produit/link-produit.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';
import { PageclientComponent } from './pageclient/pageclient.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';
const routes: Routes = [
  {path:'auth',component:ConnectionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'connection',component:ConnectionComponent},
  {path:'categories',component:ListecategorieComponent},
  {path:'modifierCat/:id',component:AddcategorieComponent},
  {path:'produits',component:ListeproduitComponent},
  {path:'modifierProd/:id',component:AddproduitComponent},
  {path:'prodAss/:id',component:LinkProduitComponent},
  {path:'catAss/:id',component:LinkCategorieComponent},
  {path:'pagePrincipale',component:PageprincipaleComponent},
  {path:'pageAdmin',component:PageadminComponent},
  {path:'pageClient',component:PageclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
