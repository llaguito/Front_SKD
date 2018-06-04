import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieLawModule } from 'angular2-cookie-law';
import { RoutesModule } from './ServiciosYModulos/RouteModule/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './Secciones/inicio/inicio.component';
import { StaffComponent } from './Secciones/staff/staff.component';
import { ContactoComponent } from './Secciones/contacto/contacto.component';
import { CaptchaComponent } from './ServiciosYModulos/ComponenteCaptcha/captcha.component';
import { PatrociniosComponent } from './Secciones/patrocinios/patrocinios.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Secciones/login/login.component';
import { NotiBlogComponent } from './Secciones/notiBlog/notiBlog.component';
import { PanelPrincipalComponent } from './Secciones/login/panel-principal/panel-principal.component';

import { HttpService } from './ServiciosYModulos/HTTPService/http.service';
import { SyncService } from './ServiciosYModulos/Sync-var/sync.service';
import { AuthGuard } from './ServiciosYModulos/AuthGuard/auth.guard';
import { ErrorPageComponent } from './Secciones/error-page/error-page.component';
import { MenuAppComponent } from './menu-app/menu-app.component';
import { InicioAppComponent } from './Secciones/login/panel-principal/inicio-app/inicio-app.component';
import { AdministracionAppComponent } from './Secciones/login/panel-principal/administracion-app/administracion-app.component';
import { NotiBlogAppComponent } from './Secciones/login/panel-principal/noti-blog-app/noti-blog-app.component';
import { PerfilAppComponent } from './Secciones/login/panel-principal/perfil-app/perfil-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    StaffComponent,
    ContactoComponent,
    CaptchaComponent,
    PatrociniosComponent,
    FooterComponent,
    LoginComponent,
    NotiBlogComponent,
    PanelPrincipalComponent,
    ErrorPageComponent,
    MenuAppComponent,
    InicioAppComponent,
    AdministracionAppComponent,
    NotiBlogAppComponent,
    PerfilAppComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    CookieLawModule,
    TooltipModule.forRoot(),
    NgxEditorModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    HttpService,
    SyncService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
