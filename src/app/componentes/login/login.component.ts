import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error } from 'console';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  login(){
    const { email, password } = this.loginForm.value;

    this.authService.getUserByEmail(email as string).subscribe((response: string | any[]) => {
      if (response.length > 0 && response[0].password == password) {
        sessionStorage.setItem('email', email as string);
        this.router.navigate(['home']);
      }
    });
  }
  }

