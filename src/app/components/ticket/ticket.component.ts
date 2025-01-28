import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../support-tickets/support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  showDetails = signal(false);
  markAsCompleted = output<string>();

  onClickTitle() {
    this.showDetails.update(oldValue => !oldValue);
  }

  onClickClose() {
    this.markAsCompleted.emit(this.data().id);

    if (this.showDetails()) {
      this.showDetails.update(() => false);
    }
  }
}
