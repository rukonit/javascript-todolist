class Model {
    constructor() {
        this.todos = [
            
            {id: 1, text: 'Run a marathon', complete: false},
            {id: 2, text: 'Plant a garden', complete: false}, 
        
    ]
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos.length +1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo);
    }

    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo)=> {
            todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo
        },)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {todo.id !== id})
    }

    toggleTodo(id) {
        this.todos = this.todos.map((todo) => {this.todo.id === id? {id: todo.id, text: todo.text, complete: !complete}: todo},)
    }

    
}

class View {
    constructor() {
       this.app = this.getElement('#root')
       
       this.title = this.createElement('h1')

       this.title.textContent = 'Todos'

       this.form = this.createElement('form', 'form-group')

       this.input = this.createElement('input', 'form-control')
       this.input.type = 'text'
       this.input.placeholder = 'Add todo item'
       this.input.name = 'todo'


       this.submitButton = this.createElement('button', 'btn-success')
       this.submitButton.textContent = 'Submit'

    // The visual representation of the todo list
       this.todoList = this.createElement('ul', 'todo-list')

    // Append the title, form, and todo list to the app
       this.form.append(this.input, this.submitButton)

    // Append the title, form, and todo list to the app
    this.app.append(this.title, this.form, this.todoList)



      // Show default message
     

    }


    get _todoText() {
        return this.input.value
      }

    _resetInput() {
        this.input.value = ''
      }
// Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag)

        if (className) element.classList.add(className)

        return element;
    }

// Retrieve an element from the DOM

getElement(selector) {
    const element = document.querySelector(selector)

    return element;
}



}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}

const app = new Controller(new Model(), new View);

