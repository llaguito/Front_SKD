import { Component, OnInit } from '@angular/core';
import { SyncService } from '../ServiciosYModulos/Sync-var/sync.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  isCollapsed: boolean;
  error: boolean;
  session$: Observable<string>;
  session: string;

  constructor(private sync: SyncService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('usuario')) {
      this.session = sessionStorage.getItem('usuario');
    }
    this.session$ = this.sync.getSession$();
    this.session$.subscribe(session => this.session = session);
  }

  logout(): void {
    sessionStorage.removeItem('usuario');
    this.sync.removeSession();
    this.router.navigate(['inicio']);
  }
}
