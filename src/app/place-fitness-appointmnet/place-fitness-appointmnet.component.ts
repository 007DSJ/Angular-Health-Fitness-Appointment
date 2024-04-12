import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesComponent } from '../services/services.component';
import { HttpClient } from '@angular/common/http';

export class Fitness {
  constructor(
    public id: number,
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public age: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string,

  ) { }
}

@Component({
  selector: 'app-place-fitness-appointmnet',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './place-fitness-appointmnet.component.html',
  styleUrl: './place-fitness-appointmnet.component.css'
})

export class PlaceFitnessAppointmnetComponent implements OnInit {

  fitnessForm: any
  userService: any
  amt: any;
  appointments: Fitness[] = [];
  url = 'http://localhost:3000/appointments';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.fitnessForm = this.formBuilder.group({
      inr: ['',],
      paisa: ['',],
      streetaddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      trainerpreference: [''],
      physiotherapist: ['false'],
      packages: [''],
      weeks: ['2', Validators.required], //extra
      amount: [''] // Disable amount initially-extra
    });

  }

  ngOnChange() {
    this.fitnessForm.get('packages').valueChanges.subscribe(() => this.updateAmount()); //extra
    this.fitnessForm.get('weeks').valueChanges.subscribe(() => this.updateAmount()); //extra
    this.fitnessForm.get('physiotherapist').valueChanges.subscribe(() => this.updateAmount()); //extra
  }

  updateAmount() {
    // extra
    const packageValue = this.fitnessForm.get('packages').value;
    const weeksValue = this.fitnessForm.get('weeks').value;
    const physio = this.fitnessForm.get('physiotherapist').value

    if (packageValue === 'Package A') {
      this.amt += weeksValue * 100;
    } else if (packageValue === 'Package B') {
      this.amt += weeksValue * 150;
    } else if (packageValue === 'Package C') {
      this.amt += weeksValue * 200;
    }

    if (physio === true) {
      this.amt += 200;
    }

    // Update the amount field in the form
    this.fitnessForm.get('amount').patchValue(this.amt);


    // Calculate amount based on selected package and weeks
    // Add logic to calculate the amount based on the selected package and weeks
    // For demonstration, let's assume a simple calculation

  }

  onSubmit() {

    var amt=0;

    this.fitnessForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.fitnessForm.value",
      this.fitnessForm.value
    );
    console.log(this.amt);

    if (this.fitnessForm.valid) {
      const fitnessData = this.fitnessForm.value;
      
    if (fitnessData.packages === '500') {
      amt += fitnessData.weeks * 500;
    } else if (fitnessData.packages === '400') {
      amt += fitnessData.weeks * 400;
    } else if (fitnessData.packages === '300') {
      amt += fitnessData.weeks * 300;
    }

    if (fitnessData.physiotherapist === true) {
      amt += 200;
    }

    // Update the amount field in the form
    this.fitnessForm.get('amount').patchValue(amt);
      fitnessData.inr = amt;
      const fitness = new Fitness(
        fitnessData.id,
        fitnessData.inr,
        fitnessData.paisa,
        fitnessData.streetaddress,
        fitnessData.city,
        fitnessData.state,
        fitnessData.country,
        fitnessData.pincode,
        fitnessData.phonenumber,
        fitnessData.email,
        fitnessData.firstname,
        fitnessData.lastname,
        fitnessData.age,
        fitnessData.trainerpreference,
        fitnessData.physiotherapist,
        fitnessData.packages,

      );

      const newAppointment = {
        name: fitnessData.firstname,
        age: fitnessData.age,
        phone: fitnessData.phonenumber,
        email: fitnessData.email,
        streetaddress: fitnessData.streetaddress,
        city: fitnessData.city,
        state: fitnessData.state,
        country: fitnessData.country,
        pincode: fitnessData.pincode,
        trainerpreference: fitnessData.trainerpreference,
        physiotherapist: fitnessData.physiotherapist,
        packages: fitnessData.packages,
        inr: fitnessData.inr,
        paisa: 0,
      };


      this.http.post(this.url, newAppointment) // Replace with your actual API endpoint
        .subscribe((data) => {
          console.log('POST Request is successful ', data);
        });

      this.fitnessForm.reset();
    }

    else {
      window.alert('Invalid Data in Form . fill the form properly');
      console.error();

    }

    // if (this.fitnessForm.invalid) {
    //   return;
    // }


    // this.userService.postfitnessdata(fitness)
    // .subscribe(
    //   (response: any) => {
    //     console.log('Fitness data posted successfully:', response);
    //     this.fitnessForm.reset();
    //   },
    //   (error: any) => {
    //     console.error('Error posting fitness data:', error);
    //   }
    // );



  }
}
