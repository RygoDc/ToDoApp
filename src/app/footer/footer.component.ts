import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor( 
    private router: Router
  ) { }
  nuevoTask(){
    this.router.navigate(['app/nuevo-task']);
  }
}
