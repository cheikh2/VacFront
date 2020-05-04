export interface Enfant {
    id?:number;
    prenom?: string,
    prenommere?: string,
    nommere?: string,
    adresse?: string,
    numetatcivil?: string,
    telmere?: number,
    datenaissance?: Date,
    numordre?: string,
    nomchefquartier?: string,
    prenomchefquartier?: string,
    sexe?: string,
    nom?: string,
    telchefquartier?: number,
    telbadiennegokh?: number,
    etatentree?: string,
    etatsortie?: string,
    motifsortie?: string,
    prenombadienegokh?: string,
    nombadienegokh?: string,
    token?:string;

    status: number;
    message: number;
    result: any;
  }