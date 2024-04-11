import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceFitnessAppointmnetComponent } from './place-fitness-appointmnet/place-fitness-appointmnet.component';

export const routes: Routes = [
    {path:'/',component:LandingPageComponent},
    {path:'/contact-us',component:ContactUsComponent},
    {path:'view-appointment',component:ViewAppointmentComponent},
    {path:'place-appointment',component:PlaceFitnessAppointmnetComponent}
];
