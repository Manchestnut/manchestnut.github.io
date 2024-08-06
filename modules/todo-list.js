// Adds an entry into the todo list
function addTodo (event) {
  // Prevents the page to refresh when the form is submitted
  event.preventDefault()
  const todoList = document.getElementById('list')
  // Grab the value of the textbox
  const todoText = document.getElementById('todo-input')
  // Define the html list element to be appended along with the unique id
  const todoEntry = `<li class="todo-entry"><input type="checkbox" class="todo-checkbox"><span class="todo-text">${todoText.value.trim()}</span><i class="delete-button material-icons">close</i></li>`
  // Dynamically add a new list item to the HTML list
  todoList.innerHTML += todoEntry
  // Clear textbox
  todoText.value = ''

  // Makes sure 'done' items remain checked
  const textTodo = todoList.querySelectorAll('.todo-text')
  textTodo.forEach(e => {
    if (e.style.textDecoration === 'line-through') {
      const cb = e.parentElement.querySelector('.todo-checkbox')// Get sibling element checkbox
      cb.checked = 'true'
    }
  })
}

// Deletes an entry from the list
function deleteTodoItem (event) {
  // Check if clicked item has class 'delete-button'
  if (event.target.classList.contains('delete-button')) {
    // Get the parent element of the button which is the list-item
    const item = event.target.parentElement
    // Remove list-item
    item.remove()
  }
}

// Strikethroughs an entry that is checked
function doneItem (event) {
  // Check if clicked item has class 'todo-checkbox'
  if (event.target.classList.contains('todo-checkbox')) {
    // If checkbox is checked put a strikethrough text decoration
    if (event.target.checked) {
      const listItem = event.target.parentElement
      const textNode = listItem.querySelector('.todo-text')
      textNode.style.textDecoration = 'line-through'
    } else {
      const listItem = event.target.parentElement
      const textNode = listItem.querySelector('.todo-text')
      textNode.style.textDecoration = 'none'
    }
  }
}

function todoMain () {
  const todoForm = document.getElementById('todo-form')
  const todoList = document.getElementById('list')

  todoForm.addEventListener('submit', addTodo)
  todoList.addEventListener('click', deleteTodoItem)
  todoList.addEventListener('click', doneItem)
}

export default todoMain
