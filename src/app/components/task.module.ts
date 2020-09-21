import { NgxsModule, Store } from '@ngxs/store';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksState } from '../state/task.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [Store],
})
export class TaskModule {}
