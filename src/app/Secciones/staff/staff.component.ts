import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})

export class StaffComponent implements OnInit {

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondo') {
      this.sync.setFondo('fondo');
    }
  }

}
