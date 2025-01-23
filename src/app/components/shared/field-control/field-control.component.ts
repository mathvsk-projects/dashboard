import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field-control',
  standalone: true,
  imports: [],
  templateUrl: './field-control.component.html',
  styleUrl: './field-control.component.css'
})
export class FieldControlComponent {
  title = input.required();
}
