import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTodoApp';
}
constructor(public authService: AuthServiceService, public router:router) {}

  signupForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
    email: new FormControl(''),
  })
