import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MethodeService } from './services/methode.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeInterceptorService } from './services/toke-interceptor.service';
import { AuthService } from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ListerUsersComponent } from './users/lister-users/lister-users.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ListerProilComponent } from './users/lister-proil/lister-proil.component';
import { AddProilComponent } from './users/add-proil/add-proil.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromosComponent } from './parametre/promos/promos.component';
import { ProfilSortieComponent } from './parametre/profil-sortie/profil-sortie.component';
import { GroupCompetenceComponent } from './parametre/group-competence/group-competence.component';
import { ListGroupCompComponent } from './parametre/group-competence/list-group-comp/list-group-comp.component';
import { CompetenceComponent } from './parametre/competence/competence.component';
import { ListCompetenceComponent } from './parametre/competence/list-competence/list-competence.component';
import { ReferentielComponent } from './parametre/referentiel/referentiel.component';
import { ListReferentielComponent } from './parametre/referentiel/list-referentiel/list-referentiel.component';
import { TagsComponent } from './parametre/tags/tags.component';
import { ListTagsComponent } from './parametre/tags/list-tags/list-tags.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    AddUsersComponent,
    ListerUsersComponent,
    ParametreComponent,
    ListerProilComponent,
    AddProilComponent,
    AuthComponent,
    HomeComponent,
    PromosComponent,
    ProfilSortieComponent,
    GroupCompetenceComponent,
    ListGroupCompComponent,
    CompetenceComponent,
    ListCompetenceComponent,
    ReferentielComponent,
    ListReferentielComponent,
    TagsComponent,
    ListTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    MethodeService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },

    TokeInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
