import { Router } from '@angular/router';
import { User } from './../../modele/users.model';
import { MethodeService } from './../../services/methode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lister-users',
  templateUrl: './lister-users.component.html',
  styleUrls: ['./lister-users.component.css']
})
export class ListerUsersComponent implements OnInit {

  users: User[];
  listUsers: User[]=[];
  //currentUser: any;
  //message = '';

  constructor(private methodeService: MethodeService, private apiService: MethodeService, private router: Router) { }

  ngOnInit() {
    this.readUsers();
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data;
      }
    );
  }
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("id", user.id.toString()); 
    console.log(user.id.toString());
   // this.router.navigate(['modifierUsers']);
  }

    readUsers() {
      return this.apiService.readAllUsers()
          .subscribe(
            data => {
              this.listUsers = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }

}