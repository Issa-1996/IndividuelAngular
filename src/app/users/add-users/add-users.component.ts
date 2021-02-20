import { Router } from '@angular/router';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addForm: FormGroup;
  avatar: any;
  constructor(private formBuilder: FormBuilder, private apiService: MethodeService, private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      genre: ['', Validators.required],
      profil: ['', Validators.required],
      avatar: ['', Validators.required],
      role: ['', Validators.required]
    });

  }
  onSubmit() {
    console.log(this.addForm.value);
    const formData=new FormData();
    formData.append('prenom',this.addForm.value.prenom)
    formData.append('nom',this.addForm.value.nom)
    formData.append('email',this.addForm.value.email)
    formData.append('telephone',this.addForm.value.telephone)
    formData.append('adresse',this.addForm.value.adresse)
    formData.append('genre',this.addForm.value.genre)
    formData.append('password',this.addForm.value.password)
    formData.append('role',this.addForm.value.role)
    formData.append('avatar',this.avatar)
    this.apiService.addUser(formData)
      .subscribe( data => {
        console.log(data);
        //this.router.navigate(['/home/listUser']);
      });
  }
  onUploadAvatar=(event:any)=>{
    this.avatar=event.target.files[0]
  }

}
