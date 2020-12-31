import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './components/cat/cat.component';
import { CatsComponent } from './components/cats/cats.component';

const routes: Routes = [
  { path: '', component: CatsComponent },
  { path: 'images/search/breed-ids/:id', component: CatComponent },
  {path: '**', component: CatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
