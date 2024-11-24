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

    constructor(public crudService: CrudService) {}

    ngOnInit(): void {
        this.crudService.tareas$.subscribe((tareas: Task[]) => {
            this.tareasPendientes = tareas.filter(
                (tarea) => tarea.status === "pendiente"
            );
            this.tareasCompletadas = tareas.filter(
                (tarea) => tarea.status === "completada"
            );
        });
    }

    abrirPopupConTarea(tarea: Task) {
        this.crudService.seleccionarTarea(tarea);
    }
}
