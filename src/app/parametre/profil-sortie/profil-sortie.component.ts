import { ProfilSortie } from './../../modele/profilSortie.model.service';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.css']
})
export class ProfilSortieComponent implements OnInit {

  listProfilSorties: ProfilSortie[]=[];
  pageCurrent=1;
  public totalPage=1;

  constructor(private apiService: MethodeService) { }

  ngOnInit(): void {
    this.readProfilSortie(this.pageCurrent);
  }
  readProfilSortie(page:any) {
    this.pageCurrent=page;
    return this.apiService.readAllProfilSortie(this.pageCurrent)
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
            this.listProfilSorties = data;
            this.listProfilSorties = this.listProfilSorties["hydra:member"] ;
            console.log(data);
          },
          error => {
            console.log(error);
          });
        }


}
