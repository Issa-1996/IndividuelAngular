import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from './../../modele/users.model';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-modifier-users',
  templateUrl: './modifier-users.component.html',
  styleUrls: ['./modifier-users.component.css']
})
export class ModifierUsersComponent implements OnInit {
  // prenom: string="";
  // message = '';

  // constructor(private methodeService: MethodeService) { }

  // ngOnInit(): void {
  // }

  // /**
  //* Methode qui modifie un utilisateur
  //* la methode updateUser() se trouve dans method.service.ts
  //*/
  // modifierUser(): void {
  //alert("Voulez-vous vraiment modifier?");
  // this.methodeService.updateUser(this.prenom)
  //  .subscribe(  
    //  response => {
      //  console.log(response);
      //  this.message = 'Le profil est bien modifer!';
    //  },
    //  error => {
      //  console.log('Une  erreur de la fonction de type',error);
    //  }
  //  );
  //}
  //________________________________________________________TEST____________________________

  users: User[];
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: MethodeService, private activR: ActivatedRoute) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['/listerUser']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required]
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/listerUsers']);
        },
        error => {
          alert(error);
        });
  }
}
