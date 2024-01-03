const ol = document.querySelector('.ol');
const addBtn = document.querySelector('#add');

const deleteItem = (e) => {
    // console.log(e.target);
    // console.log(e.target.parentElement);
    ol.removeChild(e.target.parentElement);
}

const getItem = () => {

    //selecting the input field
    const item = document.querySelector('#item-input');
    // console.log(item);

    if (item.value) {
        const listItem = document.createElement('li');
        ol.appendChild(listItem);

        const button = document.createElement('button');
        button.setAttribute('id', 'delete');
        button.onclick = deleteItem;
        button.innerText = "Delete";
        
        listItem.innerText = item.value;
        listItem.append(button);

        //setting the input value to empty
        item.value = "";
    }
    else{
        alert('Invalid input!');
    }

    //focuses onto the item input field
    item.focus();
}

addBtn.addEventListener('click', getItem);