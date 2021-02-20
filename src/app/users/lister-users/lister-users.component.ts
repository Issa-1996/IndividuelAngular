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
  pageCurrent=1;
  public totalPage=1;
  //currentUser: any;
  //message = '';

  constructor(private methodeService: MethodeService, private apiService: MethodeService, private router: Router) { }

  ngOnInit() {
    this.readUsers(this.pageCurrent);
  }
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("id", user.id.toString());
    //console.log(user.id.toString());
    this.router.navigate(['/home/listerUsers/editUser']);
  }

    readUsers(page:any) {
      this.pageCurrent=page;
      return this.apiService.readAllUsers(this.pageCurrent)
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
              this.listUsers = data;
              this.listUsers = this.listUsers["hydra:member"];
              //console.log(data);
            },
            error => {
              console.log(error);
            });
      }
}
