import { Component, Input } from '@angular/core';
import { crossOrCircle } from './types/types';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: ` <button>{{ value }}</button> `,
  styles: ``,
})
export class SquareComponent {
  @Input()
  value!: 'X' | 'O';
}
