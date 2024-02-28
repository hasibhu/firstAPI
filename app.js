

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(re => re.json())
    .then(data => displayData(data))

}

function displayData(dat) {
    const ul = document.getElementById('userList')
    for (const user of dat) {
        console.log(user);
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        li.innerText = user.name;
        li2.innerText = user.email;
        ul.appendChild(li); 
        ul.appendChild(li2); 
    }
}

