import { GroupeCompetence } from './../../modele/groupCompetence.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Competence } from './../../modele/competence.model';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.css']
})
export class ReferentielComponent implements OnInit {

  pageCurrent=1;
  listGrpComps: GroupeCompetence[]=[];
  dropdownSettings = {};
  constructor(private apiService: MethodeService) { }

  ngOnInit(): void {
    this.readGrpCompetences(this.pageCurrent);

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }
  form= new FormGroup({
    libelle: new FormControl(),
    presentation: new FormControl(),
    description: new FormControl(),
    groupeDeCompetences: new FormControl(),
    programme: new FormControl(),
    critereAdmission: new FormControl(),
    critereEvaluation: new FormControl(),
  });

  onItemSelect(item: any) {
    console.log(item);
    this.form.value.groupeDeCompetences=item;
  }
  onSelectAll(items: any) {
    console.log(items);
    this.form.value.groupeDeCompetences=items;
  }


  readGrpCompetences(page:any) {
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
          this.listGrpComps = data;
          this.listGrpComps = this.listGrpComps["hydra:member"];
      },
      error => {
        console.log(error);
      }
    );
  }

        onSubmit() {
          /*let tab=[];
          console.log(this.form.value);
          //console.log(this.addGroupCompetence.value); 
           for (const iterator of this.form.value.competences) {
             tab.push({id:iterator})
           }
           this.form.patchValue({competences:tab})
           console.log(this.form);*/
     
         console.log(this.form.value);
         this.apiService.addReferentiel(this.form.value)
           .subscribe( data => {
             console.log(data);
             //this.router.navigate(['/home/listUser']);
           });
       }
          
}
