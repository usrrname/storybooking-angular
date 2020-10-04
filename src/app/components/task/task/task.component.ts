import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/models/types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: [`../task-list/task-list.component.scss`]
})
export class TaskComponent implements OnInit {
  title: string;

  @Input() public task: Task;

  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onArchive(id: string): void {
    this.onArchiveTask.emit(id);
  }

  onPin(id: string): void {
    this.onPinTask.emit(id);
  }

  ngOnInit(): void {}
}
