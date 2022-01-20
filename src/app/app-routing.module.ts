import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'dados' },
  {
    path: 'candidateRecord',
    loadChildren: () => import('./dados/dados.module').then(m => m.DadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
