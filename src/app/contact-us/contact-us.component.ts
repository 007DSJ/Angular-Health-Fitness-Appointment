import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  queryForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.queryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      message: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  submitQuery() {
    if (this.queryForm.valid) {
      // Form is valid, show alert
      window.alert('Query submitted successfully!');
      // Optionally, you can reset the form after submission
      this.queryForm.reset();
    } else {
      // Form is invalid, display error messages
      window.alert('Please fill all required fields correctly.');
    }
  }
}
