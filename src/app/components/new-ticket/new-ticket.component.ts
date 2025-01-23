import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { FieldControlComponent } from "../shared/field-control/field-control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FieldControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
