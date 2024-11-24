import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivaFooterService } from '../services/comunicacion/activa-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  showFooter : boolean = false;
  administraFooter : boolean = false;

  constructor( 
    private activaFooterService: ActivaFooterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activaFooterService.adminFot$.subscribe(valor => {
      this.administraFooter = valor;
    });

  }

  nuevoTask(){
    this.activaFooterService.toggleFooter(true);
    this.router.navigate(['fn/nuevo-task']);
  }

  editarTask(){
    alert("Seleccione una tarea para editar");
  }

  eliminarTask(){
    alert("Seleccione una tarea para eliminar");
  }
}
