import {TaskComponent} from './task.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask')
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  done: false,
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const Default = () => ({
  component: TaskComponent,
  props: {
    task: taskData,
    onArchiveTask: actionsData.onArchiveTask,
    onPinTask: actionsData.onPinTask
  },
});

// archived task state
export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_ARCHIVED',
      done: true
    },
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Pinned = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...taskData,
      state: 'TASK_PINNED',
      done: false
    },
    onPinTask: actionsData.onPinTask
  }
});
