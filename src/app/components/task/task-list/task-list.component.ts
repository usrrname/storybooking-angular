import { ArchiveTask, PinTask, TasksState } from '../../../state/task.state';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { Task } from '../../../models/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [`./task-list.component.scss`]
})

export class TaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;
  loading = false;
  tasksInOrder: Task[] = [];

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store) {
  }

  archiveTask(id: string): void {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string): void {
    this.store.dispatch(new PinTask(id));
  }

  ngOnInit(): void { }
}
