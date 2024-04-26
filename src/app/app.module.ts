import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { UtilisateurComponent } from './pages/utilisateur/utilisateur.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { PageMvtstkComponent } from './pages/page-mvtstk/page-mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelCategorieComponent } from './pages/categories/nouvel-categorie/nouvel-categorie.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { ChangePasswComponent } from './pages/profil/change-passw/change-passw.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './composants/detail-cmd/detail-cmd.component';
import { DetailMvtStkArticleComponent } from './composants/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { HeaderComponent } from './composants/header/header.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { BouttonArticleComponent } from './composants/boutton-article/boutton-article.component';
import { MenuComponent } from './composants/menu/menu.component';
import { PaginationComponent } from './composants/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    ProfilComponent,
    UtilisateurComponent,
    PageClientComponent,
    PageFournisseurComponent,
    PageMvtstkComponent,
    PageCmdCltFrsComponent,
    NouvelArticleComponent,
    PageArticleComponent,
    NouvelCategorieComponent,
    PageCategorieComponent,
    ChangePasswComponent,
    PageProfilComponent,
    NouvelUtilisateurComponent,
    PageUtilisateurComponent,
    BouttonArticleComponent,
    DetailArticleComponent,
    DetailCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    DetailMvtStkArticleComponent,
    DetailMvtStkComponent,
    DetailUtilisateurComponent,
    HeaderComponent,
    LoaderComponent,
    MenuComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
