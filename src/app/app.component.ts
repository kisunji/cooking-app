import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView = 'recipes';

  onNavigate(view: string) {
    this.currentView = view;
  }
}
