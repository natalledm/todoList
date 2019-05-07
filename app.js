const addItem = document.querySelector('.add');
const ulList = document.querySelector('.todos');
const search = document.querySelector('.search-bar');


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

// To delete the itens

ulList.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Filtering the itens

const filterItens = preview => {
    Array.from(ulList.children)
        .filter(todoItem => !todoItem.textContent.includes(preview)) // returning only the false(the ones that doesn't contain the input), to put style on those.
        .forEach(todoItem => todoItem.classList.add('filtered'));

    Array.from(ulList.children)
        .filter(todoItem => todoItem.textContent.includes(preview))
        .forEach(todoItem => todoItem.classList.remove('filtered'));
    };

search.addEventListener('keyup', () => {
    const preview = search.value.trim();
    filterItens(preview);
});