import { Injectable } from '@angular/core';

export interface User{
  id:number, 
  nom:string; 
  prenom: string; 
  email:string;
  role: string;
  password:string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}
