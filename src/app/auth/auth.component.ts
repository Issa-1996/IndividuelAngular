import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public email = '';
  public password = '';
  public token:  any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * Connexion de l'utilisateur qui appel la methode isLogin() de auth.service.ts
   */
  onSignIn(){
    this.authService.isLogin(this.email, this.password).subscribe(
      data=>{
        this.token=data;
        this.token=this.token.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/home']);
      }
    )
  }
  
}
