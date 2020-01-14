import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-n2';

  private username = '';
  private password = '';
  private loggin = false;

  clickedButton() {
    if (this.username === "abc" && this.password === "123"){
      this.loggin = true;
    }

  }
} 
