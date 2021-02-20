import { GroupeCompetence } from './../../modele/groupCompetence.model';
import { MethodeService } from './../../services/methode.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.css']
})
export class EditCompetenceComponent implements OnInit {

  form: FormGroup;
  addCompetence:FormGroup;
  listGrpComps: GroupeCompetence[]=[];
  pageCurrent=1;
  public totalPage=1;
  dropdownSettings = {};


  constructor(private router: Router, private apiService: MethodeService) { }

  ngOnInit(): void {


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }


    let userId = window.localStorage.getItem("id");
    //console.log(userId);
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['/home']);
      return;
    }

    this.form = new FormGroup({
      groupeDeCompetences: new FormControl('',Validators.required),
      id: new FormControl('',[]),
      libelle: new FormControl(),
      niveau: new FormGroup({
        0: new FormGroup({
          libelle: new FormControl('', Validators.required),
          groupeAction: new FormControl('', Validators.required),
          critereEvaluation: new FormControl('', Validators.required)
        }),
        1: new FormGroup({
          libelle: new FormControl('', Validators.required),
          groupeAction: new FormControl('', Validators.required),
          critereEvaluation: new FormControl('', Validators.required)
        }),
        2: new FormGroup({
          libelle: new FormControl('', Validators.required),
          groupeAction: new FormControl('', Validators.required),
          critereEvaluation: new FormControl('', Validators.required)
        })
      })
    });
    this.apiService.getCompetenceById(+userId)
    .subscribe( data => {
      console.log(data);
      this.form.patchValue(data);
    });
  }

  onSubmit(){
    /*let tab=[];
    for (const iterator of this.form.value.groupeDeCompetences) {
      tab.push({id:iterator})
    }
    this.form.patchValue({groupeDeCompetences:tab})
    console.log(this.form.value);
    */
    this.apiService.updateCompetence(this.form.value)
    .subscribe( data => {
      console.log(data);
    });    
  }
}
