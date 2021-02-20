import { Router } from '@angular/router';
import { Profil } from './../../modele/profils.model';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister-proil',
  templateUrl: './lister-proil.component.html',
  styleUrls: ['./lister-proil.component.css']
})
export class ListerProilComponent implements OnInit {

  listProfils: Profil[]=[];
  pageCurrent=1;
  public totalPage=1;

  constructor(private apiService: MethodeService, private router: Router) { }

  ngOnInit(): void {
    //this.readProfils();
    this.readProfils(this.pageCurrent);
  }
  editProfil(profil: Profil): void {
    localStorage.removeItem("editProfilId");
    localStorage.setItem("id", profil.id.toString());
    //console.log(user.id.toString());
    this.router.navigate(['/home/listerProfil/editProfil']);
  }

  readProfils(page:any) {
    this.pageCurrent=page;
    return this.apiService.readAllProfils(this.pageCurrent)
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
            this.listProfils = data;
            this.listProfils = this.listProfils["hydra:member"];
            //console.log(data);
          },
          error => {
            console.log(error);
          });
    }


}
