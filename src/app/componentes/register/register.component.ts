import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../interfaces/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { error } from 'console';
import { passwordMatchValidator } from '../shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]


  },{
    validators: passwordMatchValidator
  });

  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private messageService: MessageService,
    private router: Router){

  }

  get email() {
    return this.registerForm.controls['email']
  }

  get fullname() {
    return this.registerForm.controls['fullname']
  }

  get password() {
    return this.registerForm.controls['password']
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword']


  }

 


    enviarUsuario(){
      console.log("Estoy enviando datos")
  
      const datos = {...this.registerForm.value}
      delete datos.confirmPassword;
  
       this.authService.registerUser(datos as User).subscribe(
        response => {
          this.messageService.add({ severity: 'success',
           summary: 'Registo Exitoso',
          detail: 'El usuario a sido registrado con exito' });
          this.router.navigate(['login'])
        },
        error => {
          this.messageService.add({ severity: 'error',
           summary: 'Error alta usuario',
          detail: 'El usuario no se ha podido registrar' });
        }
      )
    }

  }
