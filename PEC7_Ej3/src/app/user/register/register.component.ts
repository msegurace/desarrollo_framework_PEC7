import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public userForm!: FormGroup;

  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.userForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }
  // lo pongo para acceder a los campos dentro del formulario
  get f() { return this.userForm.controls; }

  register() {
    console.log('going to service: ' + this.f['username'].value + ',' +  this.f['password'].value)
    this.userService.register( this.f['username'].value,  this.f['password'].value)
    .subscribe({
      next: data => {
          console.log(data.msg);
          this.message = data.msg;
      },
      error: error => {
          this.message = error.message;
          console.error('There was an error!', error);
      }
    });

    this.userForm.reset;
  }
}