import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  @Output() resolve = new EventEmitter<boolean>();
  envio: boolean;

  constructor() { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    if (captchaResponse !== '') {
      this.envio = false;
      this.resolve.emit(this.envio);
    }
    if (captchaResponse === '') {
      this.envio = true;
      this.resolve.emit(this.envio);
    }
  }

}
