import { EditProfilComponent } from './users/edit-profil/edit-profil.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListTagsComponent } from './parametre/list-tags/list-tags.component';
import { AddProfilSortieComponent } from './parametre/add-profil-sortie/add-profil-sortie.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { TagsComponent } from './parametre/tags/tags.component';
import { ListReferentielComponent } from './parametre/list-referentiel/list-referentiel.component';
import { ReferentielComponent } from './parametre/referentiel/referentiel.component';
import { ListCompetenceComponent } from './parametre/list-competence/list-competence.component';
import { CompetenceComponent } from './parametre/competence/competence.component';
import { ListGroupCompComponent } from './parametre/list-group-comp/list-group-comp.component';
import { GroupCompetenceComponent } from './parametre/group-competence/group-competence.component';
import { ProfilSortieComponent } from './parametre/profil-sortie/profil-sortie.component';
import { PromosComponent } from './parametre/promos/promos.component';
import { HeaderComponent } from './header/header.component';
import { AddProilComponent } from './users/add-proil/add-proil.component';
import { ListerProilComponent } from './users/lister-proil/lister-proil.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ListerUsersComponent } from './users/lister-users/lister-users.component';
import { ParametreComponent } from './parametre/parametre.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCompetenceComponent } from './parametre/edit-competence/edit-competence.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'home', component: HomeComponent,
    children:[
      { path: 'users', component: UsersComponent, canActivate: [AuthGuardGuard] },
      { path: 'parametre', component: ParametreComponent, canActivate: [AuthGuardGuard] },
      { path: 'listerUsers', component: ListerUsersComponent,
        canActivate: [AuthGuardGuard],
        children:[
          {path: 'editUser', component: EditUserComponent, canActivate: [AuthGuardGuard]},
        ]},
      { path: 'addUsers', component: AddUsersComponent, canActivate: [AuthGuardGuard] },
      { path: 'listerProfil', component: ListerProilComponent, 
        canActivate: [AuthGuardGuard], 
        children:[
          {path: 'editProfil', component: EditProfilComponent, canActivate: [AuthGuardGuard]}
        ] },
      { path: 'addProfil', component: AddProilComponent, canActivate: [AuthGuardGuard] },
      { path: 'header', component: HeaderComponent, canActivate: [AuthGuardGuard]},
      { path: 'promos', component: PromosComponent, canActivate: [AuthGuardGuard]},
      { path: 'profilSortie', component: ProfilSortieComponent, canActivate: [AuthGuardGuard] },
      { path: 'addProfilSortie', component: AddProfilSortieComponent, canActivate: [AuthGuardGuard] },
      { path: 'groupCompetence', component: GroupCompetenceComponent, canActivate: [AuthGuardGuard]},
      { path: 'listGroupCompetence', component: ListGroupCompComponent, canActivate: [AuthGuardGuard] },
      { path: 'competence', component: CompetenceComponent, canActivate: [AuthGuardGuard]},
      { path: 'editCompetence', component: EditCompetenceComponent, canActivate: [AuthGuardGuard] },
      { path: 'listcompetence', component: ListCompetenceComponent, canActivate: [AuthGuardGuard] },
      { path: 'referentiel', component: ReferentielComponent, canActivate: [AuthGuardGuard] },
      { path: 'listReferentiel',  component: ListReferentielComponent, canActivate: [AuthGuardGuard] },
      { path: 'tags', component: TagsComponent , canActivate: [AuthGuardGuard]},
      { path: 'listtags', component: ListTagsComponent , canActivate: [AuthGuardGuard]},
    ], canActivate: [AuthGuardGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
