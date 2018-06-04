import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SyncService } from '../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-patrocinios',
  templateUrl: './patrocinios.component.html',
  styleUrls: ['./patrocinios.component.css']
})
export class PatrociniosComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondo') {
      this.sync.setFondo('fondo');
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
