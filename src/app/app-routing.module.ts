import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './pages/animal/animal.component';
import { RazaComponent } from './pages/raza/raza.component';

const routes: Routes = [
  { path: 'animals', component: AnimalComponent },
  { path: 'razas', component: RazaComponent },
  { path: '**', component: AnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
