import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../interfaces/task';
import { CrudService } from '../services/funcionalidad/crud.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent implements OnInit {
  formulario: FormGroup;
  tareaSeleccionada: Task | null | undefined = null;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(1)]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('pendiente', [Validators.required])
    });
  }

  ngOnInit(): void {
    const tareaId = this.route.snapshot.paramMap.get('id');
    if (tareaId) {
      this.tareaSeleccionada = this.crudService.getTareas().find(t => t.id === +tareaId);
      
      if (this.tareaSeleccionada) {
        this.formulario.patchValue({
          name: this.tareaSeleccionada.name,
          description: this.tareaSeleccionada.description,
          date: this.tareaSeleccionada.date,
          status: this.tareaSeleccionada.status
        });
      } else {
        alert('Tarea no encontrada');
        this.router.navigate(['app/main']);
      }
    }
  }

  actualizarTarea() {
    if (this.tareaSeleccionada && this.formulario.valid) {
      const tareaActualizada: Partial<Task> = {
        name: this.formulario.get('name')?.value,
        description: this.formulario.get('description')?.value,
        date: this.formulario.get('date')?.value,
        status: this.formulario.get('status')?.value
      };

      this.crudService.editarTarea(this.tareaSeleccionada.id, tareaActualizada);
      alert('Tarea actualizada');

      this.router.navigate(['app/main']);
    }
  }

  volver() {
    this.router.navigate(['app/main']);
  }
}
