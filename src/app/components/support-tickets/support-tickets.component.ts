import { Component } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { TicketComponent } from "../ticket/ticket.component";
import { Ticket } from './support-tickets.model';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd(data: {title: string, text: string}) {
    const ticket: Ticket = {
      title: data.title,
      request: data.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
    console.log(this.tickets);
  }

  onMarkAsCompleted(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        }
      }

      return ticket
    });
  }
}
