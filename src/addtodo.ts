// Importerar classen TodoList från filen main.ts
import { TodoList } from './main'; 

// Skapar en ny todolista när användare fyller i inputformulär och sparar info i todolista
document.addEventListener('DOMContentLoaded', function() : void {

    
    const minLista : TodoList = new TodoList();
    
    const addTodoForm = document.querySelector('.addtodo-form') as HTMLFormElement;
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const prioritySelect = document.getElementById('priority') as HTMLSelectElement;
    const messageDiv = document.getElementById('message') as HTMLDivElement;
    
    addTodoForm.addEventListener('submit', function(event : Event) : void{
        event.preventDefault();
        
        const taskInfo = taskInput.value;
        const priorityInfo = parseInt(prioritySelect.value);
        
        // Kontrollerar om input är toma
        if (taskInfo === '') {
            messageDiv.innerHTML = 'Fyll i fält';
            return;
        }
        
        // Försök lägga till
        const fungerade : boolean = minLista.addTodo(taskInfo, priorityInfo);
        
        if (fungerade) {
            messageDiv.innerHTML = 'Din uppgift är sparad i Todolista';
            taskInput.value = ''; // Rensa fält
        } else {
            messageDiv.innerHTML = 'Välj prioritet!';
        }
        
        // Göm meddelandet efter 2 sekunder
        setTimeout(function() : void {
            messageDiv.innerHTML = '';
        }, 2000);
    });
});