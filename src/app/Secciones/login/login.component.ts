import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../ServiciosYModulos/HTTPService/http.service';
import { Usuario } from '../../ServiciosYModulos/Modelos/usuario';
import { FraseCaptcha } from '../../ServiciosYModulos/Modelos/fraseCaptcha';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cambioLogin: string;
  cambioRegistro: string;
  hiddenClass: boolean;
  classHidden = true;
  letrasRojasUser = true;
  letrasRojasPassword = true;
  usuario = new Usuario();
  repeatPassword: any = '';
  fraseCaptcha = new FraseCaptcha();
  respuesta: string;
  error: boolean;
  comprobacionNickMail = true;
  usuarioIncorrecto = true;
  resultado: boolean;

  constructor(
    private BDService: HttpService,
    private sync: SyncService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoTotal') {
      this.sync.setFondo('fondoTotal');
    }
    if (sessionStorage.getItem('usuario')) {
      this.router.navigate(['panelPrincipal', 'inicioApp']);
    }
  }

  registro(): void {
    this.cambioLogin = 'desaparecer';
    setTimeout(() => {
      this.hiddenFunction('login');
    }, 2000);
  }

  volver(): void {
    this.cambioRegistro = 'desaparecer';
    setTimeout(() => {
      this.hiddenFunction('registro');
    }, 2000);
  }

  hiddenFunction(cuadro): void {
    if (cuadro === 'login') {
      this.hiddenClass = true;
      this.classHidden = false;
      this.cambioRegistro = 'aparecer';
    }
    if (cuadro === 'registro') {
      this.hiddenClass = false;
      this.classHidden = true;
      this.cambioLogin = 'aparecer';
    }
  }

  login(): void {
    this.error = false;
    this.BDService.loguearUsuario(this.usuario).subscribe(
      (resultado: any) => {
        this.resultado = resultado;
      },
      () => (this.error = true),
      () => {
        if (!this.resultado) {
          this.usuarioIncorrecto = false;
        } else {
          sessionStorage.setItem('usuario', JSON.stringify(this.resultado));
          this.sync.setSession(sessionStorage.getItem('usuario'));
          this.router.navigate(['panelPrincipal', 'inicioApp']);
        }
      }
    );
  }

  comenzarRegistro(): void {
    this.error = false;
    this.BDService.fraseRobot().subscribe(
      (frase: FraseCaptcha) => {
        this.fraseCaptcha = frase;
      },
      () => (this.error = true),
      () => {
        this.respuesta = prompt(this.fraseCaptcha.Frase);
        if (
          this.respuesta.toLocaleUpperCase() ===
          this.fraseCaptcha.Respuesta.toLocaleUpperCase()
        ) {
          this.registrar();
        } else {
          alert('La respuesta no es correcta');
        }
      }
    );
  }

  registrar(): void {
    this.error = false;
    this.BDService.registrarUsuario(this.usuario).subscribe(
      (resultado: any) => {
        this.resultado = resultado;
      },
      () => (this.error = true),
      () => {
        if (!this.resultado) {
          this.comprobacionNickMail = false;
        } else {
          sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
          this.sync.setSession(sessionStorage.getItem('usuario'));
          this.router.navigate(['panelPrincipal', 'inicioApp']);
        }
      }
    );
  }
}
