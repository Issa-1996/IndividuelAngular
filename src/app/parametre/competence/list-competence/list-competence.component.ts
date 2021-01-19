import { MethodeService } from './../../../services/methode.service';
import { Competence } from './../../../modele/competence.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  listComp: Competence[]=[];
  constructor( private methodeService:MethodeService ) { }

  ngOnInit(): void {
    this.readCompetences();
  }

  readCompetences() {

    return this.methodeService.readAllCompetence()
         .subscribe(
           data => {
             this.listComp = data;
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }
}
