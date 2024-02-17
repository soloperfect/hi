const getList = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const lists = await response.json();
        console.log(lists);
        let listcontent = '';
        lists.forEach((el, index) => {
            listcontent += `<li class="list-group-item ${el.completed ? 'disabledList' : ''} ${index % 2 ? 'list-group-item-info' : 'list-group-item-success'}"> <input type="checkbox" class="checkbox" ${el.completed ? ' checked' : ''}/> <label for=""> ${el.title}</label></li>`;
        });
        document.getElementById('todoList').innerHTML = listcontent;
        if (checkedCount) {
            checkedCount = 0;
        }
    } catch (e) {
        console.log('failed to fetch lists data', e);
    }
};

document.getElementById('getList').addEventListener('click', (e) => {
    e.preventDefault();
    getList();
});

let checkedCount = 0;

const alertP = () => {
    return new Promise((resolve, reject) => {
        if (checkedCount === 5) {
            resolve(checkedCount);
        } else {
            reject('count not equal to 5');
        }
    });
};

const call = () => {
    alertP().then((data) => {
        alert('Well done! 5 activities today');
    })
    .catch((err) => {
        console.log('Promise rejected');
    });
};

getList();

document.getElementById('todoList').addEventListener('change', (e) => {
    if (e.target.classList.contains('checkbox')) {
        if (e.target.checked) {
            console.log('checked');
            checkedCount++;
            e.target.parentElement.classList.add('active');
        } else {
            checkedCount--;
            console.log('unchecked');
            e.target.parentElement.classList.remove('active');
        }

        call();
    }
});
