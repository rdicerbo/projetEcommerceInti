import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpInterceptorBasicAuthService } from './service/http-interceptor-basic-auth-service';
import { ConnectionComponent } from './connection/connection.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { SetcategorieComponent } from './setcategorie/setcategorie.component';
import { LinkProduitComponent } from './link-produit/link-produit.component';
import { LinkCategorieComponent } from './link-categorie/link-categorie.component';
import { PageprincipaleComponent } from './pageprincipale/pageprincipale.component';
import { PageclientComponent } from './pageclient/pageclient.component';
import { PageadminComponent } from './pageadmin/pageadmin.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ListeproduitComponent,
    ListecategorieComponent,
    AddcategorieComponent,
    AddproduitComponent,
    SetcategorieComponent,
    LinkProduitComponent,
    LinkCategorieComponent,
    PageprincipaleComponent,
    PageclientComponent,
    PageadminComponent,
    InscriptionComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
