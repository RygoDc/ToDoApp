import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/funcionalidad/crud.service';

@Component({
  selector: 'app-nuevo-task',
  templateUrl: './nuevo-task.component.html',
  styleUrl: './nuevo-task.component.scss'
})
export class NuevoTaskComponent {
  formulario: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ){
    this.formulario = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(1)]],
      description: ["", [Validators.required, Validators.minLength(1)]],
      status: ["", [Validators.required, Validators.minLength(1)]],
      date: ["", [Validators.required, Validators.minLength(1)]],
    });
  }

  main(){
    
      const { name, description, status, date } = this.formulario.value;
  
      // Agrega la tarea al servicio
      this.crudService.agregarTarea({ name, description, status, date });
  
      // Muestra un mensaje de confirmación
      alert('Tarea agregada');
  
      // Opcional: Limpia el formulario
      this.formulario.reset();
  
      // Navega al componente principal
      this.router.navigate(['app/main']);    
  }

  volver(){
    this.router.navigate(['app/main']);
  }
}
