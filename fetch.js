
      

// console.log(`I am comenncted`);



const url = 'https://jsonplaceholder.typicode.com/todos/1';

function loadData(){
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json.title))
}
















 


