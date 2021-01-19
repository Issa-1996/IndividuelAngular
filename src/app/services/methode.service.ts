import { HttpHeaders } from '@angular/common/http';
import { Competence } from './../modele/competence.model';
import { GroupeCompetence } from './../modele/groupCompetence.model';
import { ProfilSortie } from './../modele/profilSortie.model.service';
import { Profil } from './../modele/profils.model';
import { User } from './../modele/users.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodeService {
  baseUrl="http://127.0.0.1:8000/api/admin/users";

  constructor(private httpClient: HttpClient) { }
  /**
   * Methode pour lister les Utilisateurs
   */
  readAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://127.0.0.1:8000/api/admin/users', {headers: {'Accept': 'application/json'}});
  }
  getUsers() {
      return this.httpClient.get<User[]>(this.baseUrl);
    }
  /**
   * Methode pour modifier un utulusateur
   * @param id 
   * @param data 
   */
  // updateUser(prenom: string): Observable<User[]> {
    // const body='{"prenom":"'+ prenom +'"}';    
    // const header=new HttpHeaders({'Content-Type':'application/json'});  
    // return this.httpClient.put<User[]>('http://127.0.0.1:8000/api/admin/profils/7', body, {headers:header});
  // }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.baseUrl + user.id, user);
  }
  getUserById(id: number): Observable<User> {
   const idFind =this.readAllUsers[id].find(
      (idU: User)=>{
        return idU.id===id;
      }
    );
    return idFind;
  }




  //Les methodes du profil
  readAllProfils(): Observable<Profil[]> {
    return this.httpClient.get<Profil[]>('http://127.0.0.1:8000/api/admin/profils', {headers: {'Accept': 'application/json'}});
  }

  //Les methodes du profil de sortie
  readAllProfilSortie(): Observable<ProfilSortie[]> {
    return this.httpClient.get<ProfilSortie[]>('http://127.0.0.1:8000/api/admin/profil_de_sorties', {headers: {'Accept': 'application/json'}});
  }


  //Les methodes de la groupe de competences
  readAllGroupC(): Observable<GroupeCompetence[]> {
    return this.httpClient.get<GroupeCompetence[]>('http://127.0.0.1:8000/api/admin/groupe_de_competences', {headers: {'Accept': 'application/json'}});
  }


  //Les methodes de competences
  readAllCompetence(): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>('http://127.0.0.1:8000/api/admin/competences', {headers: {'Accept': 'application/json'}});
  }
}
