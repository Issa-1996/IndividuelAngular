import { User } from './users.model';
export class GroupeCompetence{
    id:number;
    libelle: string;
    description: string;
    archivage: boolean;
    competences:[{
        id: number,
        libelle:string
    }]
}