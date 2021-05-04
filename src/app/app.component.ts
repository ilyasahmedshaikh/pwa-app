import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-app';
  option: any = 1;

  constructor(){}

  ngOnInit() {
  }

  select(event: any) {
    this.option = event.target.value;
  }

}
