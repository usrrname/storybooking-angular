import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskComponent, TaskListComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class TaskModule {

}
