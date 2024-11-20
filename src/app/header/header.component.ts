import { Component, OnInit } from '@angular/core';
import { TieneHeaderService } from '../services/comunicacion/tiene-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  showNav : boolean = false;
 mostrarPlaneta: boolean = false;
 
 constructor(
  private tieneHeaderService: TieneHeaderService
 ){}

ngOnInit(): void {
  this.tieneHeaderService.mostrar$.subscribe(valor =>{
    this.mostrarPlaneta = valor;
  });
}


  toggleNav(){
    this.showNav = !this.showNav;
  }
}
