import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = "Tejas Desai";
  enteredName = "";

  printName() {
    this.enteredName = this.name
  }

  setName(name: string) {
    this.name = name
  }

}
