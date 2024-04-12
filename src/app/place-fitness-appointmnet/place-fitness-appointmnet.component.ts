import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesComponent } from '../services/services.component';

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-appointmnet',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './place-fitness-appointmnet.component.html',
  styleUrl: './place-fitness-appointmnet.component.css'
})

export class PlaceFitnessAppointmnetComponent implements OnInit{

  fitnessForm:any
  userService:any

  constructor(private formBuilder : FormBuilder){}

  ngOnInit() {
    this.fitnessForm = this.formBuilder.group({
      inr: ['', Validators.required],
      paisa: ['', Validators.required],
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
      weeks: ['2',Validators.required], //extra
      amount: [{ value: '', disabled: true }] // Disable amount initially-extra
    });

  }

  ngOnChange()
  {
    this.fitnessForm.get('packages').valueChanges.subscribe(() => this.updateAmount()); //extra
    this.fitnessForm.get('weeks').valueChanges.subscribe(() => this.updateAmount()); //extra
    this.fitnessForm.get('physiotherapist').valueChanges.subscribe(() => this.updateAmount()); //extra
  }

  updateAmount()
  {
    // extra
    const packageValue = this.fitnessForm.get('package').value;
    const weeksValue = this.fitnessForm.get('weeks').value;
    let amount = 0;

    // Calculate amount based on selected package and weeks
    // Add logic to calculate the amount based on the selected package and weeks
    // For demonstration, let's assume a simple calculation
    if (packageValue === 'Package A') {
      amount = weeksValue * 100;
    } else if (packageValue === 'Package B') {
      amount = weeksValue * 150;
    } else if (packageValue === 'Package C') {
      amount = weeksValue * 200;
    }

    // Update the amount field in the form
    this.fitnessForm.get('amount').patchValue(amount);
  }

  onSubmit() {
    this.fitnessForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.fitnessForm.value",
      this.fitnessForm.value
    );
    if (this.fitnessForm.invalid) {
      return;
    }
    const fitnessData = this.fitnessForm.value;
    const fitness = new Fitness(
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
      fitnessData.packages
    );
    
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
