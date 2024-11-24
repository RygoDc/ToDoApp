import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { NuevoTaskComponent } from './nuevo-task/nuevo-task.component';
import { EditarComponent } from './editar/editar.component';
import { LayoutSinFooterComponent } from './layout-sin-footer/layout-sin-footer.component';

const routes: Routes = [
  {path:"", 
    component: LayoutSinHeaderComponent,
    children:[
      {path:"", component: LoginComponent},
      {path:"register", component: RegisterComponent}
    ]
  },
  {
    path:"app",
    component: LayoutConHeaderComponent,
    children:[
      {path:"main", component: MainComponent}      
    ]
  },
  {
    path:"fn",
    component: LayoutSinFooterComponent,
    children:[
      {path:"nuevo-task", component: NuevoTaskComponent},
      {path:"editar/:id", component: EditarComponent},
      {path: '', redirectTo: 'app/main', pathMatch: 'full'}
    ]
  },
  {
    path:"**",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
