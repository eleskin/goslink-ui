import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GoslinkButtonComponent} from './ui/goslink-button/goslink-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoslinkButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'goslink-ui';
}
