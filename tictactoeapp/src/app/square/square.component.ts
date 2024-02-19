import { Component, Input } from '@angular/core';
import { squareType } from '../types/square-types';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: ` <button>{{ value }}</button> `,
  styles: ['button { height: 100%; width: 100% }'],
})
export class SquareComponent {
  @Input()
  value!: squareType;
}
