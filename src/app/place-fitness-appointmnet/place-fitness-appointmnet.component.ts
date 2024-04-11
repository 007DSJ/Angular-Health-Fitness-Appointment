import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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
  userService: any;

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
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      trainerpreference: [''],
      physiotherapist: [''],
      packages: ['']
    });
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
    
    this.userService.postfitnessdata(fitness)
    .subscribe(
      (      response: any) => {
        console.log('Fitness data posted successfully:', response);
        this.fitnessForm.reset();
      },
      (      error: any) => {
        console.error('Error posting fitness data:', error);
      }
    );
  }
}
