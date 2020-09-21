import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PureTaskListComponent } from './components/pure-task-list/pure-task-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
   {
    path: '', component: AppComponent,
    children: [
      { path: 'tasklist', component: TaskListComponent },
    ]
   },
   {
    path: '', component: AppComponent,
    children: [
      { path: 'pure-task-list', component: PureTaskListComponent },
    ]
   }
 ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
