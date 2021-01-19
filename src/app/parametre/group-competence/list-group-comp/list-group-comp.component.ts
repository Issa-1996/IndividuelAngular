import { GroupeCompetence } from './../../../modele/groupCompetence.model';
import { MethodeService } from './../../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group-comp',
  templateUrl: './list-group-comp.component.html',
  styleUrls: ['./list-group-comp.component.css']
})
export class ListGroupCompComponent implements OnInit {

  listGoupCs: GroupeCompetence[]=[];
  constructor(private methodeService: MethodeService) { }

  ngOnInit(): void {
    this.readGroupC();
  }
  readGroupC() {

    return this.methodeService.readAllGroupC()
         .subscribe(
           data => {
             this.listGoupCs = data;
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }
}
