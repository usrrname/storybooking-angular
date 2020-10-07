export abstract class Task {
  id: string;
  title: string;
  state: string;
  done?: boolean;
}

export abstract class User {
  id: string;
  role: string;
  lastName: string;
  firstName: string;
}
