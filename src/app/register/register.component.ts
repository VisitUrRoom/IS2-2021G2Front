import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    firstName: null,
	  tipopersona:null,
	  userid: null,
    address:null,
	  city:null,
	  neighborhood:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  successfulMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password, firstName, tipopersona, userid, address, city, neighborhood} = this.form;

    this.authService.register(username, email, password, firstName, tipopersona, userid,  address, city, neighborhood).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.successfulMessage = data.message;
      },
      err => {
        alert(err.error.message);  
        console.log(err.error);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}