import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrutasComponent } from './frutas/frutas.component';
import { ProductosComponent } from './productos/productos.component';
import { ErrorComponent } from './error/error.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:nombre', component: HomeComponent },
  { path: 'frutas', component: FrutasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
