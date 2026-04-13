import './style.css'

interface Todo {
  task: string;
  completed: boolean;
  priority: 1|2|3;
}

class TodoList implements Todo {
  todos: Array<Todo>;

  constructor(task:string, completed:boolean, priority: 1|2|3) {
    this.task= task;
    this.completed= completed;
    this.priority= priority;

    this.loadFromLocalStorage();
  }

  addTodo(task: string, priority: number): boolean {
    if(task: string, priority: 1|2|3) {
      let newTodo : Todo {
        task: task;
        completed: false;
        priority: priority as 1 || priority as 2 || priority as 3;
      }

      this.todos.push(newTodo);
      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    };
  };

}
