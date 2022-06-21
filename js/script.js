const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    const html = `
   <li class="flex items-center justify-between p-4 bg-violet-800 rounded-sm">
            <p class="text-xl">${todo}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash cursor-pointer"
                 viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </li>
   `
    list.innerHTML += html
}

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim()
    if (todo.length) {
        generateTemplate(todo)
        addForm.reset()
    }

})

// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('bi-trash')) {
        e.target.parentElement.remove()
    }
})

// Search and filter
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('hidden'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('hidden'))
}

search.addEventListener('keyup', e => {
    e.preventDefault()
    const term = search.value.trim()
    filterTodos(term)
})