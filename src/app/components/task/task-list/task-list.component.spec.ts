import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from './task-list.component';

describe('TaskComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListComponent, TaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create task list', () => {
    expect(component);
  });
});
