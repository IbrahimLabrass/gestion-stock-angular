import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageFournisseurComponent } from './pages/page-fournisseur/page-fournisseur.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './pages/page-mvtstk/page-mvtstk.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { NouvelCategorieComponent } from './pages/categories/nouvel-categorie/nouvel-categorie.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangePasswComponent } from './pages/profil/change-passw/change-passw.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    canActivate: [],
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
      },
      {
        path: 'articles',
        component: PageArticleComponent,
        canActivate: []
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
        canActivate: []
      },
      {
        path: 'nouvelarticle/:idArticle',
        component: NouvelArticleComponent,
        canActivate: []
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent,
        canActivate: []
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: []
      },
     
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent,
        canActivate: [],
        data: {
          origin: 'client'
        }
      },
     
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate: []
      },
    
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent,
        canActivate: [],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: PageCmdCltFrsComponent,
        canActivate: [],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategorieComponent,
        canActivate: []
      },
      {
        path: 'nouvellecategorie',
        component: NouvelCategorieComponent,
        canActivate: []
      },
      {
        path: 'nouvellecategorie/:idCategory',
        component: NouvelCategorieComponent,
        canActivate: []
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate: []
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: []
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: []
      },
      {
        path: 'changermotdepasse',
        component: ChangePasswComponent,
        canActivate: []
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
