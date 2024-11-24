import { Component, EventEmitter, Output } from "@angular/core";
import { CrudService } from "../services/funcionalidad/crud.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-popup",
    templateUrl: "./popup.component.html",
    styleUrl: "./popup.component.scss",
})
export class PopupComponent {
    constructor(public crudService: CrudService, private router: Router) {}

    cambiarEstado() {
        const tarea = this.crudService.tareaSeleccionada;
        if (tarea) {
            this.crudService.cambiarEstadoTarea(tarea.id);
        }
        alert("Estado cambiado");
        this.crudService.mostrarPopup = false;        
    }

    editar() {
        const tarea = this.crudService.tareaSeleccionada;
        if (tarea) {
            this.router.navigate(["fn/editar", tarea.id]);
        }
        this.crudService.mostrarPopup = false;
    }

    borrar() {
        const tarea = this.crudService.tareaSeleccionada;
        if (tarea) {
            this.crudService.borrarTarea(tarea.id);
        }
        alert("Tarea eliminada");
        this.crudService.mostrarPopup = false; 
    }

    cerrarPopup() {
        this.crudService.mostrarPopup = false; 
    }
}
