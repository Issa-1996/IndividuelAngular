import { GroupeCompetence } from '../../modele/groupCompetence.model';
import { MethodeService } from '../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-group-comp',
  templateUrl: './list-group-comp.component.html',
  styleUrls: ['./list-group-comp.component.css']
})
export class ListGroupCompComponent implements OnInit {

  listGoupCs: GroupeCompetence[]=[];
  pageCurrent=1;
  public totalPage=1;
  constructor(private apiService: MethodeService) { }

  ngOnInit(): void {
    this.readGroupC(this.pageCurrent);
  }
  readGroupC(page:any) {
    this.pageCurrent=page;
    return this.apiService.readAllGroupC(this.pageCurrent)
        .subscribe(
          data => {
            let totalPage=data;
            totalPage=totalPage['hydra:view']['hydra:last'];
            if(totalPage){
              // @ts-ignore
              totalPage=totalPage[totalPage.length-1];
              // @ts-ignore
              this.totalPage=totalPage;
            }
            this.listGoupCs = data;
            this.listGoupCs = this.listGoupCs["hydra:member"];
            console.log(data);
          },
          error => {
            console.log(error);
          });
        }

}
