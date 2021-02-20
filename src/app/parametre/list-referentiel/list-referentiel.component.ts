import { Router } from '@angular/router';
import { MethodeService } from '../../services/methode.service';
import { Referentiel } from '../../modele/referentiel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {

  listReferentiels: Referentiel[]=[];
  pageCurrent=1;
  public totalPage=1;

  constructor(private apiService: MethodeService, private router: Router) { }

  ngOnInit(): void {
    this.readReferentiels(this.pageCurrent);
  }
  readReferentiels(page:any) {
    this.pageCurrent=page;
    return this.apiService.readAllReferentiels(this.pageCurrent)
        .subscribe(
          data => {
            let totalPage=data;
            totalPage=totalPage['hydra:view'];
            if(totalPage){
              // @ts-ignore
              totalPage=totalPage[totalPage.length-1];
              // @ts-ignore
              this.totalPage=totalPage;
            }
            this.listReferentiels = data;
            this.listReferentiels = this.listReferentiels["hydra:member"];
            console.log(data);
          },
          error => {
            console.log(error);
          });
        }
}
