import { Component, OnInit } from "@angular/core";
import { CrudService } from "../services/funcionalidad/crud.service";
import { Task } from "../interfaces/task";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.scss",
})
export class MainComponent implements OnInit {
    tareasPendientes: Task[] = [];
    tareasCompletadas: Task[] = [];

    constructor(private crudService: CrudService) {}

    ngOnInit(): void {
        this.actualizarTareas();
    }

    // agregarTarea() {
    //     const nuevaTarea: Task = {
    //         id: Date.now(),
    //         date: new Date().toISOString().split("T")[0],
    //         name: "Nueva Tarea",
    //         description: "Descripción de la nueva tarea",
    //         status: "pendiente",
    //     };
    //     this.crudService.agregarTarea(nuevaTarea);
    //     this.actualizarTareas();
    //     this.router.navigate(['app/main']);
    // }

    actualizarTareas() {
        const tareas = this.crudService.getTareas();
        this.tareasPendientes = tareas.filter((tarea) => tarea.status === "pendiente");
        this.tareasCompletadas = tareas.filter((tarea) => tarea.status === "completada");
    }    

    completarTarea(id: number) {
        this.crudService.editarTarea(id, { status: "completada" });
        this.actualizarTareas();
    }

    borrarTarea(id: number) {
        this.crudService.borrarTarea(id);
        this.actualizarTareas();
    }





    // seleccionarTarea(tarea: any, esPendiente: boolean) {
    //     const mensaje = esPendiente
    //         ? `¿Qué deseas hacer con la tarea "?\nAceptar: Completar\nEditar o Borrar: Editar o Borrar`
    //         : `¿Qué deseas hacer con la tarea "?\nCancelar: Volver a pendiente\nEditar o Borrar: Editar o Borrar`;

    //     const completar = confirm(mensaje);

    //     if (completar) {
    //         if (esPendiente) {
    //             this.crudService.moverTareaACompletadas(tarea);
    //             this.crudService.borrarTarea(tarea, esPendiente);
    //             alert("Tarea completada.");
    //             this.crudService.tareasPendientes =
    //                 this.crudService.tareasPendientes.filter(
    //                     (t) => t !== tarea
    //                 );
    //         } else {
    //             this.crudService.moverTareaAPendientes(tarea);
    //         }
    //         alert("Estado de la tarea actualizado.");
    //     } else {
    //         const editar = confirm(
    //             "¿Deseas editar la tarea? (Cancelar para borrar)"
    //         );
    //         if (editar) {
    //             //this.crudService.seleccionarTarea(tarea);
    //             // this.router.navigate(['app/editar-task']);
    //         } else {
    //             this.crudService.borrarTarea(tarea, esPendiente);
    //             alert("Tarea eliminada.");
    //         }
    //     }
    // }
}
