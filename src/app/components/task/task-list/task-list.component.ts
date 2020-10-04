import { ArchiveTask, PinTask, TasksState } from '../../../state/task.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { Task } from '../../../models/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;
  tasks: Task[] = [];

  constructor(private store: Store) {
    this.store.select(TasksState)
    .subscribe( tasks => {
      this.tasks = tasks;
    });
  }

  ngOnInit(): void {}

  archiveTask(id: string): void {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string): void {
    this.store.dispatch(new PinTask(id));
  }
}
