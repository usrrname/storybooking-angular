import { ArchiveTask, PinTask, TasksState } from '../../state/task.state';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Select, State, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: `./pure-task-list.component.html`,
})

export class PureTaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;
  tasks: Task[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  archiveTask(id: string): void {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string): void {
    this.store.dispatch(new PinTask(id));
  }
}
