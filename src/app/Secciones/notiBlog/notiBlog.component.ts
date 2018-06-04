import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-notiblog',
  templateUrl: './notiBlog.component.html',
  styleUrls: ['./notiBlog.component.css']
})
export class NotiBlogComponent implements OnInit {
  customClass = 'customClass';
  isFirstOpen = true;
  oneAtATime = true;


  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoNotiBlog') {
      this.sync.setFondo('fondoNotiBlog');
    }
  }

}
