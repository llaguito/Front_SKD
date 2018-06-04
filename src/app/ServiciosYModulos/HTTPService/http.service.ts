import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Correo } from '../Modelos/correo';
import { Usuario } from '../Modelos/usuario';
import { FraseCaptcha } from '../Modelos/fraseCaptcha';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  url: string;
  httpOptions = new HttpHeaders({
    'Content-Type': `application/x-www-form-urlencoded; application/json`,
    Authorization: `a896780d0b77e693455bea40327f23ac`
  });
  frasecaptcha = new FraseCaptcha();

  constructor(public http: HttpClient) {}

  enviarCorreo(correo: Correo): Observable<Correo> {
    this.url = 'http://bd.skdragons.com/EnviarCorreo';
    const contacto = JSON.stringify(correo);
    const params = 'json=' + contacto;
    return this.http.post<Correo>(this.url, params, {
      headers: this.httpOptions
    });
  }

  loguearUsuario(usuario: Usuario): Observable<any> {
    this.url = 'http://bd.skdragons.com/Usuario';
    const params = new HttpParams()
      .set('Usuario', usuario.Usuario)
      .set('Contrasena', usuario.Contrasena);
    return this.http.post<any>(this.url, params, { headers: this.httpOptions });
  }

  registrarUsuario(usuario: Usuario): Observable<any> {
    this.url = 'http://bd.skdragons.com/RegistrarUsuario';
    const params = new HttpParams()
      .set('Usuario', usuario.Usuario)
      .set('Contrasena', usuario.Contrasena)
      .set('Nick', usuario.Nick)
      .set('Email', usuario.Email);
    return this.http.post<any>(this.url, params, { headers: this.httpOptions });
  }

  actualizarUsuario(usuario: Usuario): Observable<boolean> {
    this.url = 'http://bd.skdragons.com/ActualizarUsuario';
    const params = new HttpParams()
      .set('Usuario', usuario.Usuario)
      .set('Nick', usuario.Nick)
      .set('Email', usuario.Email)
      .set('Rango', usuario.Rango + '');
    return this.http.put<boolean>(this.url, params, { headers: this.httpOptions });
  }

  actualizarContrasenaUsuario(usuario: Usuario): Observable<any> {
    this.url = 'http://bd.skdragons.com/ActualizarContrasenaUsuario';
    const params = new HttpParams()
      .set('Email', usuario.Email)
      .set('Contrasena', usuario.Contrasena);
    return this.http.put<any>(this.url, params, { headers: this.httpOptions });
  }

  fraseRobot(): Observable<FraseCaptcha> {
    this.url = 'http://bd.skdragons.com/FraseCaptcha';
    return this.http.get<FraseCaptcha>(this.url, { headers: this.httpOptions });
  }
}
