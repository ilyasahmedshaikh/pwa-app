import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  promptEvent: any;

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
