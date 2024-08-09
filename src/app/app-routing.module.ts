import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import {PrincipalPageComponent} from "./principal-page/principal-page.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminPanelComponent} from "./components/administration/admin-panel/admin-panel.component";



const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' }, // Ruta predeterminada redirige a /principal
  { path: 'principal', component: PrincipalPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
