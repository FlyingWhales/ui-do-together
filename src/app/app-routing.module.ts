import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListCreateComponent } from './list-create/list-create.component';

const routes: Routes = [
  { path: 'lists', component: ListComponent },
  { path: 'tasklist/:id', component: TaskListComponent },
  { path: 'listcreate', component: ListCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
