import './style.css'

interface Todo {
  task: string;
  completed: boolean;
  priority: 1|2|3;
}

class TodoList {
  todos: Array<Todo>;

  constructor() {
    this.todos= [];
    this.loadFromLocalStorage();
  }

  addTodo(task: string, priority: number): boolean {
    if(priority === 1 || priority === 2 || priority === 3) {
      let newTodo : Todo = {
        task: task,
        completed: false,
        priority: priority as 1 || priority as 2 || priority as 3
      };

      this.todos.push(newTodo);
      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    };
  };

  markTodoCompleted(todoIndex: number): void {
    if (this.todos[todoIndex]) {
      this.todos[todoIndex].completed = true;
      this.saveToLocalStorage();
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  };

  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadFromLocalStorage(): void {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    } else {
      this.todos = [];
    }
  }

}
