import { User } from './users.model';
export class GroupeCompetence{
    id:number;
    libelle: string;
    description: string;
    user: User;
    archivage: boolean;
    competences: number;
}