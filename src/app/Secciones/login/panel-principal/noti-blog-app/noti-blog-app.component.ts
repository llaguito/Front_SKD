import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../../../ServiciosYModulos/Sync-var/sync.service';

@Component({
  selector: 'app-noti-blog-app',
  templateUrl: './noti-blog-app.component.html',
  styleUrls: ['./noti-blog-app.component.css']
})
export class NotiBlogAppComponent implements OnInit {
  contenidoNoticia: string;
  config = {
    'editable': true,
    'spellcheck': true,
    'height': 'auto',
    'minHeight': '200px',
    'width': 'auto',
    'minWidth': '0',
    'translate': 'yes',
    'enableToolbar': true,
    'showToolbar': true,
    'placeholder': 'Introduce tu nueva noticia aquí...',
    'imageEndPoint': '',
    'toolbar': [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['fontName', 'fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink', 'image', 'video']
    ]
  };

  constructor(private sync: SyncService) { }

  ngOnInit() {
    if (this.sync.getFondo() !== 'fondoPanel') {
      this.sync.setFondo('fondoPanel');
    }
  }

  publicarNoticia(noticia): void {
    alert(noticia);
  }

}
