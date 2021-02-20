import { Tag } from './../modele/tag.model';
import { Referentiel } from './../modele/referentiel.model';
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
  baseUrlProfil="http://127.0.0.1:8000/api/admin/profils";
  baseUrlCompetence="http://127.0.0.1:8000/api/admin/competences";
  baseUrlGroupCompetence="http://127.0.0.1:8000/api/admin/groupe_de_competences";
  baseUrlReferentiel="http://127.0.0.1:8000/api/admin/referentiels";
  headers=new HttpHeaders({Accept:'*/*'})

  constructor(private httpClient: HttpClient) { }
  /**
   * Methode pour lister les Utilisateurs
   */
  readAllUsers(page: any): Observable<User[]> {
    return this.httpClient.get<User[]>('http://127.0.0.1:8000/api/admin/users?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }
  
  addUser(user: any): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user, {headers:this.headers});
  }
  updateUser(userFormData: any): Observable<User> {
    return this.httpClient.post<User>('http://127.0.0.1:8000/api/admin/users'+'/' +  userFormData.get('id'), userFormData, {headers:this.headers});
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>('http://127.0.0.1:8000/api/admin/users/' + id);
  }




  //Les methodes du profil
  addProfil(profil: any): Observable<Profil> {
    return this.httpClient.post<Profil>(this.baseUrlProfil, profil, {headers:this.headers});
  }

  updateProfil(profil: any): Observable<Profil> {
    return this.httpClient.put<Profil>('http://127.0.0.1:8000/api/admin/profils'+'/' + profil.id, profil, {headers:this.headers});
  }

  readAllProfils(page: any): Observable<Profil[]> {
    return this.httpClient.get<Profil[]>('http://127.0.0.1:8000/api/admin/profils?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }
  getProfilById(id: number): Observable<Profil> {
    return this.httpClient.get<Profil>('http://127.0.0.1:8000/api/admin/profils/' + id);
  }













  //Les methodes du profil de sortie
  readAllProfilSortie(page: any): Observable<ProfilSortie[]> {
    return this.httpClient.get<ProfilSortie[]>('http://127.0.0.1:8000/api/admin/profil_de_sorties?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }


  //Les methodes de la groupe de competences
  addGoupCompetence(competence: any): Observable<GroupeCompetence> {
    return this.httpClient.post<GroupeCompetence>(this.baseUrlGroupCompetence, competence, {headers:this.headers});
  }


  readAllGroupC(page: any): Observable<GroupeCompetence[]> {
    return this.httpClient.get<GroupeCompetence[]>('http://127.0.0.1:8000/api/admin/groupe_de_competences?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }
  oneGroupCompetence(id: number): Observable<GroupeCompetence[]> {
    return this.httpClient.get<GroupeCompetence[]>('http://127.0.0.1:8000/api/admin/groupe_de_competences/'+id, {headers: {'Content-Type': 'application/json'}});
  }



  //Les methodes de competences
  oneCompetence(id: number): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>('http://127.0.0.1:8000/api/admin/competences/'+id, {headers: {'Content-Type': 'application/json'}});
  }

  readAllCompetence(page: any): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>('http://127.0.0.1:8000/api/admin/competences?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }
  addCompetence(competence: any): Observable<Competence> {
    return this.httpClient.post<Competence>(this.baseUrlCompetence, competence, {headers:this.headers});
  }
  getCompetenceById(id: number): Observable<Competence> {
    return this.httpClient.get<Competence>(this.baseUrlCompetence+'/' + id);
  }
  updateCompetence(competence: any): Observable<Competence> {
    return this.httpClient.put<Competence>(this.baseUrlCompetence+'/' + competence.id, competence, {headers:this.headers});
  }
  readCompetence(page: any): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>('http://127.0.0.1:8000/api/admin/competences?_page='+page, {headers: {'Content-Type': 'application/json'}});
  }







    //Les methodes du referentiels
    addReferentiel(referentiel: any): Observable<Referentiel> {
      return this.httpClient.post<Referentiel>(this.baseUrlReferentiel, referentiel, {headers:this.headers});
    }
  
    readAllReferentiels(page: any): Observable<Referentiel[]> {
      return this.httpClient.get<Referentiel[]>('http://127.0.0.1:8000/api/admin/referentiels?_page='+page, {headers: {'Content-Type': 'application/json'}});
    }

    //Les methodes du referentiels
    readAllTags(page: any): Observable<Tag[]> {
        return this.httpClient.get<Tag[]>('http://127.0.0.1:8000/api/admin/referentiels?_page='+page, {headers: {'Content-Type': 'application/json'}});
    }
    
}
