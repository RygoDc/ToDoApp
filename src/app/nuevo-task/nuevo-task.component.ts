import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-task',
  templateUrl: './nuevo-task.component.html',
  styleUrl: './nuevo-task.component.scss'
})
export class NuevoTaskComponent {
  constructor(
    private router: Router
  ){}

  main(){
    this.router.navigate(['app/main']);
  }
}
