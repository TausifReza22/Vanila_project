const form = document.getElementById('grocery');
const input = document.getElementById('writeList');
const list = document.querySelector('ol');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newItem = document.createElement('li');
    newItem.textContent = input.value;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    newItem.appendChild(editButton);
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);
    input.value = '';
});

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const item = button.parentElement;

        if (button.textContent === 'Edit') {
            const newText = prompt('Edit item:', item.textContent);
            if (newText !== null) {
                item.textContent = newText;
                item.appendChild(editButton);
                item.appendChild(deleteButton);
            }
        } else if (button.textContent === 'Delete') {
            list.removeChild(item);
        }
    }
});