import { Component, OnInit } from '@angular/core';
import { TieneHeaderService } from '../services/comunicacion/tiene-header.service';

@Component({
  selector: 'app-layout-con-header',
  templateUrl: './layout-con-header.component.html',
  styleUrl: './layout-con-header.component.scss'
})
export class LayoutConHeaderComponent implements OnInit {
  
  constructor(
    private tieneHeaderService: TieneHeaderService
  ){}

  ngOnInit(): void {
    this.tieneHeaderService.togglePlaneta(true);
  }
}
