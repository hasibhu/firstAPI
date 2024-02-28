

function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(respond => respond.json())
        .then(data => postComment(data))
}


function postComment(comments) {
    const postBox = document.getElementById('postBox');

    for (const comment of comments) {
        console.log(comment);
        const commentbox = document.createElement('div'); //create a di

        commentbox.classList.add('post') //Add class name in the newly ceated div.
        commentbox.innerHTML = `
            <h4>UserID - ${comment.userId} </h4>
            <h5>Post Title - ${comment.title} </h5>
            <p>Post Description - ${comment.body}</p>
        `;
        postBox.appendChild(commentbox);
    }
}


loadPost();             //this call the function automatically and load the data in the website dynamically as mentioned above.