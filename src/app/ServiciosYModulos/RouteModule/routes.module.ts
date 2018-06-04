import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from '../../Secciones/inicio/inicio.component';
import { StaffComponent } from '../../Secciones/staff/staff.component';
import { ContactoComponent } from '../../Secciones/contacto/contacto.component';
import { PatrociniosComponent } from '../../Secciones/patrocinios/patrocinios.component';
import { LoginComponent } from '../../Secciones/login/login.component';
import { NotiBlogComponent } from '../../Secciones/notiBlog/notiBlog.component';
import { PanelPrincipalComponent } from '../../Secciones/login/panel-principal/panel-principal.component';
import { ErrorPageComponent } from '../../Secciones/error-page/error-page.component';
import { AdministracionAppComponent } from '../../Secciones/login/panel-principal/administracion-app/administracion-app.component';
import { NotiBlogAppComponent } from '../../Secciones/login/panel-principal/noti-blog-app/noti-blog-app.component';
import { PerfilAppComponent } from '../../Secciones/login/panel-principal/perfil-app/perfil-app.component';
import { InicioAppComponent } from '../../Secciones/login/panel-principal/inicio-app/inicio-app.component';

import { AuthGuard } from '../AuthGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'notiblog', component: NotiBlogComponent},
  { path: 'patrocinios', component: PatrociniosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'errorPage', component: ErrorPageComponent },
  { path: 'panelPrincipal', component: PanelPrincipalComponent, canActivate : [AuthGuard],
    children: [
      { path: '', redirectTo: '/panelPrincipal/inicioApp', pathMatch: 'full' },
      { path: 'inicioApp', component: InicioAppComponent, canActivate: [AuthGuard] },
      { path: 'administracion', component: AdministracionAppComponent, canActivate: [AuthGuard] },
      { path: 'notiBlogApp', component: NotiBlogAppComponent, canActivate: [AuthGuard] },
      { path: 'perfilApp', component: PerfilAppComponent, canActivate: [AuthGuard] }
    ] },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class RoutesModule { }
