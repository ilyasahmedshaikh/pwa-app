import { Component } from '@angular/core';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-app';
  option: any = 1;

  constructor(
    public Pwa: PwaService
  ){}

  ngOnInit() {
  }

  select(event: any) {
    this.option = event.target.value;
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
