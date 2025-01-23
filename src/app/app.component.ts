import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServersStatusComponent } from './components/servers-status/servers-status.component';
import { SupportTicketsComponent } from './components/support-tickets/support-tickets.component';
import { TrafficStatusComponent } from './components/traffic-status/traffic-status.component';
import { DashboardItemComponent } from "./components/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServersStatusComponent, SupportTicketsComponent, TrafficStatusComponent, DashboardItemComponent]
})
export class AppComponent {

}
