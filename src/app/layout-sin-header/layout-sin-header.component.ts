import { Component, OnInit } from '@angular/core';
import { TieneHeaderService } from '../services/comunicacion/tiene-header.service';

@Component({
  selector: 'app-layout-sin-header',
  templateUrl: './layout-sin-header.component.html',
  styleUrl: './layout-sin-header.component.scss'
})
export class LayoutSinHeaderComponent implements OnInit {
  
  constructor(
    private tieneHeaderService: TieneHeaderService
  ){}

  ngOnInit(): void {
    this.tieneHeaderService.togglePlaneta(false);
  }

}
