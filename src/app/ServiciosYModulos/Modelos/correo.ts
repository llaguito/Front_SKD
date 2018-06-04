export class Correo {
  Email: string;
  Nick: string;
  Mensaje: string;

  vaciar(): void {
    this.Email = '';
    this.Nick = '';
    this.Mensaje = '';
  }
}
