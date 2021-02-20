import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MethodeService } from './../../services/methode.service';
import { GroupeCompetence } from './../../modele/groupCompetence.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {
  

  addCompetence:FormGroup;
  listGrpComps: GroupeCompetence[]=[];
  pageCurrent=1;
  public totalPage=1;

  dropdownSettings = {};
  constructor(private apiService: MethodeService, private formBuilder: FormBuilder) { }
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
  form = new FormGroup({
    groupeDeCompetences: new FormControl(),
    libelle: new FormControl(),
    niveau: new FormGroup({
      1: new FormGroup({
        libelle: new FormControl('', Validators.required),
        groupeAction: new FormControl('Nancy', Validators.required),
        critereEvaluation: new FormControl('Drew', Validators.required)
      }),
      2: new FormGroup({
        libelle: new FormControl('', Validators.required),
        groupeAction: new FormControl('Nancy', Validators.required),
        critereEvaluation: new FormControl('Drew', Validators.required)
      }),
      3: new FormGroup({
        libelle: new FormControl('', Validators.required),
        groupeAction: new FormControl('Nancy', Validators.required),
        critereEvaluation: new FormControl('Drew', Validators.required)
      })
    })
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
  
  onSubmit(){
    /*let tab=[];
    console.log(this.form.value); 
    for (const iterator of this.form.value.groupeDeCompetences) {
      tab.push({id:iterator})
    }
    this.form.patchValue({groupeDeCompetences:tab})*/
    console.log(this.form);

    this.apiService.addCompetence(this.form.value)
    .subscribe( data => {
      console.log(data);
    });
  }

}
