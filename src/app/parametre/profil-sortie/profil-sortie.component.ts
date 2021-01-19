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
  constructor(private methodeservice: MethodeService) { }

  ngOnInit(): void {
    this.readProfilSortie();
  }
  readProfilSortie() {

    return this.methodeservice.readAllProfilSortie()
         .subscribe(
           data => {
             this.listProfilSorties = data;
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }

}
