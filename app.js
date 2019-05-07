// Display Todos
// Add Todos
// Delete Specific Todos
// Is pushed to a git repo so that we can download it

const addItem = document.querySelector('.add');
const ulList = document.querySelector('.todos');

const generateItemList = todo => {
    const htmlItem = `
    <li class="todos-item">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ulList.innerHTML += htmlItem;
};

addItem.addEventListener('submit', e =>{

    e.preventDefault(); // to prevent page refresh
    const todo = addItem.add.value.trim(); // trim to remove spaces before, in case of type accident

    if(todo.length){ // to make sure it doesn't save empty space
        generateItemList(todo);
        addItem.reset(); // reset the input field
    }
})