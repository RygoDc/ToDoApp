import { Component, OnInit } from "@angular/core";
import { TieneHeaderService } from "../services/comunicacion/tiene-header.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
    showNav: boolean = false;
    mostrarPlaneta: boolean = false;

    constructor(
        private tieneHeaderService: TieneHeaderService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.tieneHeaderService.mostrar$.subscribe((valor) => {
            this.mostrarPlaneta = valor;
        });
    }

    toggleNav() {
        this.showNav = !this.showNav;
    }

    nuevoTask() {
        this.router.navigate(["fn/nuevo-task"]);
    }

    editarTask() {
        alert("Seleccione una tarea para editar");
    }

    eliminarTask() {
        alert("Seleccione una tarea para eliminar");
    }
}
