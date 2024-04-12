import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  userService()
  {
     const data={
      "streetaddress": "test",
      "city": "test",
      "state": "test",
      "country": "india",
      "pincode": 560058,
      "trainerpreference": "Male Trainer",
      "physiotherapist": "Yes",
      "packages": "500",
      "inr": 1000,
      "paisa": 10,
      "id": 1
     }
  }
  // json-server --watch src/app/services/db.json
}
