import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-inicio-app',
  templateUrl: './inicio-app.component.html',
  styleUrls: ['./inicio-app.component.css']
})
export class InicioAppComponent implements OnInit {

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoPanel') {
      this.sync.setFondo('fondoPanel');
    }
  }
}
