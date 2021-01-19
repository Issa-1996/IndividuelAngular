import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn : boolean;
  constructor(private accessService: AuthService, private router: Router) { 
  
   }

  ngOnInit(): void {
    this.accessService.isLoggedIn().subscribe(
      (data) => {
        this.isLoggedIn=data;
        console.log(data);
        
      }
    );  
  }
  /**
   * deconnexion, detruit  le token puis le redirige vers l'authentification
   * appel la methode isLogOut() de auth.service.ts
   */
  deconnecter(){
    this.accessService.isLogOut();
    this.router.navigate(['/']);
  }
}
