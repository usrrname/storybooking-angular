import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../../models/types';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: [`./task-list.component.scss`]
})

export class TaskListComponent implements OnInit {

  tasksInOrder: Task[] = [];
  @Input() loading = false;
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  constructor() { }

  ngOnInit(): void { }
}
