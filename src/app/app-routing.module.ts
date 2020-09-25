import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PageComponent } from './components/page/page.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';

const routes: Routes = [
  {
    path: '', component: PageComponent,
    children: [
      { path: 'tasklist', component: TaskListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
