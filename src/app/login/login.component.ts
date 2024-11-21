import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidadorService } from '../services/validador.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formulario:FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private validadorService: ValidadorService
  ){
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]], 
      password: ['', [Validators.required, Validators.minLength(1)]],
    })    
  }

  main(){
    let validar = this.validadorService.validar(this.formulario.value.name, this.formulario.value.password);
    if(validar)
    {      
      this.router.navigate(['app/main']);
    }else{
      alert('Usuario o contraseña incorrectos');
    }      
  }

}
