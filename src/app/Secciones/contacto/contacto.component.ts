import { Component, OnInit } from '@angular/core';
import { Correo } from '../../ServiciosYModulos/Modelos/correo';
import { HttpService } from '../../ServiciosYModulos/HTTPService/http.service';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  patternMail = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i);
  envio: boolean;
  mensaje: boolean;
  captcha: boolean;
  comprobador: boolean;
  vacio: boolean;
  email: boolean;
  correo = new Correo;
  formulario: boolean;

  constructor(private correoService: HttpService, private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondo') {
      this.sync.setFondo('fondo');
    }
    this.envio = true;
    this.mensaje = true;
    this.captcha = false;
    this.comprobador = false;
    this.vacio = true;
    this.email = true;
    this.formulario = false;
  }

  enviarCorreo(): void {
    if (this.camposVacios()) {
      this.vacio = false;
    } else if (this.correo.Email.match(this.patternMail)) {
      this.formulario = true;
      this.email = true;
      this.vacio = true;
      this.correoService.enviarCorreo(this.correo).subscribe();
      this.envio = true;
      this.correo.vaciar();
      this.mensaje = false;
    } else {
      this.vacio = true;
      this.email = false;
    }
  }

  click(event) {
    if ( this.comprobador === false ) {
      this.envio = event;
      this.captcha = true;
      this.comprobador = true;
    }
  }

  camposVacios(): boolean {
    if ((this.correo.Nick === undefined) || (this.correo.Email === undefined) || (this.correo.Mensaje === undefined)) {
      return true;
    } else {
      return false;
    }
  }
}
