// Interface Todo som definierar kontraktet för en att göra-uppgift
export interface Todo {
  task: string;
  completed: boolean;
  priority: 1|2|3;
}

// Todo klass
export class TodoList {
  todos: Array<Todo>;

  //Constructorn gör listan tom och hämtar sedan alla sparade uppgifter från webbläsarens LocalStorage
  constructor() {
    this.todos= [];
    this.loadFromLocalStorage();
  }

  // Returnera true om både task och priority innehåller korrekta värden, i annat fall false
  addTodo(task: string, priority: number): boolean {
    if((task !== "") && (priority === 1 || priority === 2 || priority === 3)) {
      let newTodo : Todo = {
        task: task,
        completed: false,
        priority: priority
      };

      this.todos.push(newTodo);
      this.saveToLocalStorage();
      return true;
    } else {
      return false;
    };
  };

  // Markera todos som är klara
  markTodoCompleted(todoIndex: number): void {
    if (this.todos[todoIndex]) {
      this.todos[todoIndex].completed = true;
      this.saveToLocalStorage();
    }
  }

  // Hämtar hela listan av todos
  getTodos(): Todo[] {
    return this.todos;
  };

  // Sparar todos till LocalStorage
  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  // Hämtar todos från LocalStorage
  loadFromLocalStorage(): void {
    let savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    } else {
      this.todos = [];
    }
  }

}
