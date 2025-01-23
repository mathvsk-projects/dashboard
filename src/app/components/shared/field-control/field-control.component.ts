import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-field-control',
  standalone: true,
  imports: [],
  templateUrl: './field-control.component.html',
  styleUrl: './field-control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class FieldControlComponent {
  title = input.required();
}
