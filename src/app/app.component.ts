import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SyncService } from './ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  fondo$: Observable<string>;
  fondo: string;

  constructor(private sync: SyncService) { }

  ngOnInit() {
    this.fondo$ = this.sync.getFondo$();
    this.fondo$.subscribe(fondo => this.fondo = 'container-fluid ' + fondo);
  }
}
