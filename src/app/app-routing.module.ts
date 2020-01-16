import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ArrayObjectComponent } from './components/array-object/array-object.component';


const routes: Routes = [
  { path: 'array', component: ArrayObjectComponent },
  {
    path: 'table',
    component: TableComponent,
    data: { title: 'Table List' }
  },
  { path: '',
    redirectTo: '/table',
    pathMatch: 'full'
  },
  { path: '**', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
