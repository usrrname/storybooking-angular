import { Archived, Default, Pinned } from '../components/task/task.stories';
import { DefaultTaskList, EmptyTaskList, LoadingTaskList, WithPinnedTasksList } from '../components/task-list/task-list.stories';

import { AppModule } from '../app.module';
import { TaskComponent } from 'src/app/components/task/task.component';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { storiesOf } from '@storybook/angular';

storiesOf('Task Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [TaskComponent],
      declarations: [TaskComponent],
    })
  )
  .add('Default', Default)
  .add('Pinned', Pinned)
  .add('Archived', Archived);

storiesOf('Task List Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [TaskListComponent],
      declarations: [TaskComponent, TaskListComponent],
      providers: [AppModule]
    })
  )
  .add('Default', DefaultTaskList)
  .add('With Pinned Tasks', WithPinnedTasksList)
  .add('Loading', LoadingTaskList)
  .add('Empty', EmptyTaskList);


