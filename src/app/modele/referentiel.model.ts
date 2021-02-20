export class Referentiel{
    id!: number;
    libelle!: string;
    presentation: string;
    programme!:string;
    critereAdmission!: string;
    critereEvaluation!:string;
    competences:[{
        id: number,
        libelle:string
    }]

}