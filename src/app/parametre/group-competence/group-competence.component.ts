import { Competence } from './../../modele/competence.model';
import { MethodeService } from './../../services/methode.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-competence',
  templateUrl: './group-competence.component.html',
  styleUrls: ['./group-competence.component.css']
})
export class GroupCompetenceComponent implements OnInit {

  //addGroupCompetence: FormGroup;
  pageCurrent=1;
  objetCompetences: Competence[]=[];

  dropdownSettings = {};
  constructor(private formBuilder: FormBuilder, private apiService: MethodeService) { }

  ngOnInit(): void {
    this.readCompetences(this.pageCurrent);

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
    competences: new FormControl(),
    libelle: new FormControl(),
    description: new FormControl(),
  });
  
  readCompetences(page:any) {
    this.pageCurrent=page;
    return this.apiService.readCompetence(this.pageCurrent)
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
            this.objetCompetences = data;
            this.objetCompetences = this.objetCompetences["hydra:member"];
            //console.log(data);
          },

          error => {
            console.log(error);
          });
        }

        onItemSelect(item: any) {
          console.log(item);
          //this.form.value.competences=item;
        }
        onSelectAll(items: any) {
          console.log(items);
          //this.form.value.competences=items;
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
    this.apiService.addGoupCompetence(this.form.value)
      .subscribe( data => {
        console.log(data);
        //this.router.navigate(['/home/listUser']);
      });
  }

}
