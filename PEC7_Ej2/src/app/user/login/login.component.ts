import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userForm!: FormGroup;
  

  public message: string = '';
  constructor(private fb: FormBuilder, private userService: UserService) { 
    this.userForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  // lo pongo para acceder a los campos dentro del formulario
  get f() { return this.userForm.controls; }

  login() {

    if (this.userForm.valid){
      
      console.log('going to service: ' + this.f['username'].value + ',' +  this.f['password'].value)
      this.userService.login( this.f['username'].value,  this.f['password'].value)
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

}
