import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-administracion-app',
  templateUrl: './administracion-app.component.html',
  styleUrls: ['./administracion-app.component.css']
})
export class AdministracionAppComponent implements OnInit {

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoPanel') {
      this.sync.setFondo('fondoPanel');
    }
  }

}
