import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoTotal') {
      this.sync.setFondo('fondoTotal');
    }
  }
}
