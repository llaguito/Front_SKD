import { HttpService } from './../../../../ServiciosYModulos/HTTPService/http.service';
import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../../../ServiciosYModulos/Sync-var/sync.service';
import { Usuario } from '../../../../ServiciosYModulos/Modelos/usuario';

@Component({
  selector: 'app-perfil-app',
  templateUrl: './perfil-app.component.html',
  styleUrls: ['./perfil-app.component.css']
})
export class PerfilAppComponent implements OnInit {
  usuario = new Usuario();
  repeatPassword: any = '';
  error: boolean;
  resultado: boolean;

  constructor(private sync: SyncService, private BDService: HttpService) {}

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoPanel') {
      this.sync.setFondo('fondoPanel');
    }
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  actualizarDatos(peticion): void {
    if (peticion === 'perfil') {
      this.error = false;
      this.BDService.actualizarUsuario(this.usuario).subscribe(
        (resultado: boolean) => {
          this.resultado = resultado;
        },
        () => (this.error = true),
        () => {
          if (this.resultado) {
            sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
            this.sync.setSession(sessionStorage.getItem('usuario'));
            alert('Datos actualizados correctamente.');
          } else {
            alert('Actualizacion de datos fallida');
          }
        }
      );
    }
    if (peticion === 'contrasena') {
      this.error = false;
      this.BDService.actualizarContrasenaUsuario(this.usuario).subscribe(
        (resultado: any) => {
          this.resultado = resultado;
          console.log(resultado);
        },
        () => (this.error = true),
        () => {
          if (this.resultado) {
            sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
            this.sync.setSession(sessionStorage.getItem('usuario'));
            alert('Contraseña actualizada correctamente.');
          } else {
            alert('Actualizacion de datos fallida');
          }
        }
      );
    }
  }
}
