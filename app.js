const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const taskTemp = document.querySelector('#task-template');
const list_el = document.querySelector('#tasks');

var editing = false

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
        input.classList.remove('error');
        input.offsetWidth;    
        input.classList.add('error');
        
        return;
    }

    if (editing) {
        return;
    }

    form.reset();
    
    var new_task = taskTemp.content.cloneNode(true);
    
    new_task.querySelector('.text').value = task;


    const inputTemp = new_task.querySelector('input')

    const editTemp = new_task.querySelector('.edit')
    const deleteTemp = new_task.querySelector('.delete')


    editTemp.addEventListener('click', () => {
        if (!editing) {
            editTemp.innerText = "Save"
            inputTemp.removeAttribute('readonly')
            inputTemp.focus();
        } else {
            editTemp.innerText = "Edit"
            inputTemp.setAttribute('readonly', '')
        }
        editing = ! editing;
    })
    
    
    list_el.appendChild(new_task);
    const ref_newTask = list_el.lastElementChild;

    deleteTemp.addEventListener('click', (e) => {
        list_el.removeChild(ref_newTask)
    })
})
