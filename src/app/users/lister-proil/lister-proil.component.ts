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
  constructor(private methodeService: MethodeService) { }

  ngOnInit(): void {
    this.readProfils();
  }
  readProfils() {

    return this.methodeService.readAllProfils()
         .subscribe(
           data => {
             this.listProfils = data;
             console.log(data);
           },
           error => {
             console.log(error);
           });
     }

}
