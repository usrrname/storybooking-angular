import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/models/types';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.scss']
})
export class PureTaskListComponent implements OnInit {

  tasksInOrder: Task[] = [];
  @Input() loading = false;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Input() set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

ngOnInit(): void{}
}
