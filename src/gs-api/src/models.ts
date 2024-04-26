import { Article } from "./models/article";
import { CommandeFournisseur } from "./models/commande-fournisseur";

/* tslint:disable */
export interface LigneCommandeFournisseur {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeFournisseur?: CommandeFournisseur;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}