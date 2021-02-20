import { GroupeCompetence } from './groupCompetence.model';
export class Competence{
    id: Number;
    libelle: String;
    groupeCompt:[{
        id:number,
        libelle:string
    }]
    niveau: String;
}