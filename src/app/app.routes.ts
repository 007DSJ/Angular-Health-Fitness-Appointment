import { Routes, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceFitnessAppointmnetComponent } from './place-fitness-appointmnet/place-fitness-appointmnet.component';

export const routes: Routes = [
   
    {path:'contact-us',component:ContactUsComponent},
    {path:'view-appointment',component:ViewAppointmentComponent},
    {path:'place-appointment',component:PlaceFitnessAppointmnetComponent},
    {path:'',component:LandingPageComponent},
    
];
