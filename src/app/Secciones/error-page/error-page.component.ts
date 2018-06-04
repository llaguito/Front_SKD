import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoError') {
      this.sync.setFondo('fondoError');
    }
  }
}
