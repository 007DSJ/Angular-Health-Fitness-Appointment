import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Appointment {
  id: number;
  name: string;
  streetaddress: string;
  city: string;
  packages: string;
  trainerpreference: string;
  phone: string;
  email: string;
  amount:number;
  age:number;
  physiotherapist:string,
  inr:string
}

@Component({
  selector: 'app-view-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-appointment.component.html',
  styleUrl: './view-appointment.component.css'
})
export class ViewAppointmentComponent {
  appointments: Appointment[] = [];
  url = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.http.get<Appointment[]>(this.url) // Replace with your actual API endpoint
      .subscribe(data => {
        this.appointments = data;
        console.log(this.appointments)
        console.log(this.appointments.length)
      });

    
  }
}
