// Importerar classen TodoList från filen main.ts
import { TodoList } from './main'; 

document.addEventListener("DOMContentLoaded", () => {
  const todolistFull = new TodoList();
  
  // Hämta alla todos som lades
  const todos = todolistFull.getTodos();
    
      // Hittar tabellen
    const tableBody = document.getElementById('todoBody');
    
    // Kolla om tabellen finns
    if (!tableBody) return;
    
    // Om inga todos finns
    if (todos.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3">Todolista är tom!</td></tr>';
        return;
    }
    
    // Töma tabellen
    tableBody.innerHTML = '';

    // Loopa igenom alla todos
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        
        // Skapa en ny rad
        const rad: HTMLTableRowElement = document.createElement('tr');

        if (todo.priority === 1) {
            rad.classList.add('priority-1');
        } else if (todo.priority === 2) {
            rad.classList.add('priority-2');
        } else {
            rad.classList.add('priority-3');
        }
        
        // Skapa 3 kolumner
        const kolumn1: HTMLTableCellElement = document.createElement('td');
        const kolumn2: HTMLTableCellElement = document.createElement('td');
        const kolumn3: HTMLTableCellElement = document.createElement('td');
        
        // Fyll i data
        kolumn1.innerHTML = todo.task;
        kolumn2.innerHTML = String(todo.priority);
        if (todo.completed) {
            kolumn3.innerHTML = 'Klar';
        } else {
            // Skapa knapp
            const knapp: HTMLButtonElement = document.createElement('button');
            knapp.innerHTML = 'Markera klar';
            knapp.onclick = function() {
                todolistFull.markTodoCompleted(i);
                location.reload(); // Uppdaterar sidan
            };
            kolumn3.appendChild(knapp);
        }
        
        // Lägg till kolumner i raden
        rad.appendChild(kolumn1);
        rad.appendChild(kolumn2);
        rad.appendChild(kolumn3);
                
        // Lägg till raden i tabellen
        tableBody.appendChild(rad);
    }

})