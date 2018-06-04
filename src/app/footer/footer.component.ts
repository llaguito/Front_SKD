import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../ServiciosYModulos/Modelos/usuario';
import { SyncService } from '../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  modalRef: BsModalRef;
  url: String = 'https://www.tsviewer.com/promotion/dynamic_sig/sig.php/clan160x283_all/1105930.png';
  session$: Observable<string>;
  session: string;
  usuario: Usuario;

  constructor(private modalService: BsModalService, private sync: SyncService) { }

  ngOnInit() {
    if (sessionStorage.getItem('usuario')) {
      this.session = sessionStorage.getItem('usuario');
      this.usuario = JSON.parse(this.session);
    }
    this.session$ = this.sync.getSession$();
    this.session$.subscribe(session => {
      this.session = session;
      this.usuario = JSON.parse(this.session);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    Observable.interval(2000).subscribe(x => this.UpdateTs3());
  }

  UpdateTs3(): void {
    this.url = 'https://www.tsviewer.com/promotion/dynamic_sig/sig.php/clan160x283_all/1105930.png';
  }
}
