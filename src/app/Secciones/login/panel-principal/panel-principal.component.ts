import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  constructor(private sync: SyncService) {}

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoPanel') {
      this.sync.setFondo('fondoPanel');
    }
  }
}
