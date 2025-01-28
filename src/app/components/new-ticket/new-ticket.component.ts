import { Component, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { FieldControlComponent } from "../shared/field-control/field-control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule, FieldControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  inputValue = viewChild<HTMLInputElement>('titleInput');
  add = output<{title: string, text: string}>();
  
  title = "";
  request = "";

  onSubmit() {
    this.add.emit({
      title: this.title,
      text: this.request
    });
  }
}
