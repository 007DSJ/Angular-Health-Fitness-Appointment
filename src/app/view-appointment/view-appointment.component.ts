import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Appointment {
  id: number;
  name: string;
  address: string;
  city: string;
  package: string;
  trainerPreference: string;
  phone: string;
}

@Component({
  selector: 'app-view-appointment',
  standalone: true,
  imports: [],
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.css'
})
export class ViewAppointmentComponent {
  appointments: Appointment[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    // this.http.get<Appointment[]>('http://your-api-endpoint/appointments') // Replace with your actual API endpoint
    //   .subscribe(data => {
    //     this.appointments = data;
    //   });
  }
}
