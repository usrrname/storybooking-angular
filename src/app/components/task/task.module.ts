import { NgxsModule, Store } from '@ngxs/store';

import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksState } from '../../state/task.state';

@NgModule({
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([TasksState])
  ],
  exports: [TaskComponent, TaskListComponent],
  providers: [AppComponent, Store]
})
export class TaskModule {

}
