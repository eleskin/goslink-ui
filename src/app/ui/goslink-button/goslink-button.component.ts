import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-goslink-button',
  standalone: true,
  imports: [],
  templateUrl: './goslink-button.component.html',
  styleUrl: './goslink-button.component.css'
})
export class GoslinkButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'transparent' = 'primary';
  @Input() size: 'default' | 'compact' = 'default';
  @Input() disabled: boolean = false;
}
