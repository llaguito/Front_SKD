import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SyncService {
  private varSession$ = new Subject<string>();
  session: string;

  private varFondo$ = new Subject<string>();
  fondo: string;

  constructor() { }

  setSession(usuario: string): void {
    this.session = usuario;
    this.varSession$.next(this.session);
  }

  getSession$(): Observable<string> {
    return this.varSession$.asObservable();
  }

  removeSession(): void {
    this.session = null;
    this.varSession$.next(this.session);
  }

  setFondo(fondo: string): void {
    this.fondo = fondo;
    this.varFondo$.next(this.fondo);
  }

  getFondo$(): Observable<string> {
    return this.varFondo$.asObservable();
  }

  getFondo(): string {
    return this.fondo;
  }
}
