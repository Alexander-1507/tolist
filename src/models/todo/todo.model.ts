export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: string;
}

export interface TodoState {
    todos: Todo[]
}

