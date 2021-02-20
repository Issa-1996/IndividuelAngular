import { Router } from '@angular/router';
import { GroupeCompetence } from '../../modele/groupCompetence.model';
import { MethodeService } from '../../services/methode.service';
import { Competence } from '../../modele/competence.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  listComps: GroupeCompetence[]=[];
  ObjetGroupComps: GroupeCompetence[]=[];
  ObjetCompetence: Competence[]=[];
  pageCurrent=1;
  dropdownSettings = {};
  public totalPage=1;

  constructor( private apiService: MethodeService, private router: Router ) { }

  ngOnInit(): void {
    this.readGroupCompetences(this.pageCurrent);
    //this.listGroupComp(this.competence);
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

  readGroupCompetences(page:any) {
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
            this.listComps = data;
            this.listComps = this.listComps["hydra:member"];
            //console.log(this.listComps);
          },
          error => {
            console.log(error);
          });
        }
        
        onSubmit(comp) {
          //alert("bonjour");
          //console.log("ok");
          //console.log(comp);
          this.pageCurrent=comp;
          return this.apiService.oneGroupCompetence(this.pageCurrent)
          .subscribe(
            data => {
              //console.log(data["competences"]);
              
              this.ObjetGroupComps = data["competences"];
              //console.log(this.ObjetGroupComps);
            },
            error => {
              console.log(error);
            });
          }  


          onNiveau(niveau){
            //alert("bonjour");
            this.pageCurrent=niveau;
            return this.apiService.oneCompetence(this.pageCurrent)
            .subscribe(
              data => {
                //console.log(data);
                
                this.ObjetCompetence = data["niveau"];
                console.log(this.ObjetCompetence);
              },
              error => {
                console.log(error);
              });
          }
          getIdCompetence(event){
            //alert("oui");
            console.log(event);
            localStorage.removeItem("editUserId");
            localStorage.setItem("id", event.toString());
            //console.log(event.toString());
            this.router.navigate(['/home/editCompetence']);            
          }

          
          
}
      