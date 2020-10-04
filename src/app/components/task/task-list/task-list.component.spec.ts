import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Store } from '@ngxs/store';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  fixture = TestBed.createComponent(TaskListComponent);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskComponent],
      providers: [Store]
    })
      .compileComponents();
  });


  it('should render task list', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const hostElement = fixture.nativeElement.querySelectorAll('.list-items');
    const taskListItems = hostElement.querySelectorAll('.list-item');
    expect(taskListItems.length).toEqual(6);
  });
});
