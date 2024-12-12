async function getUser(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let j = await response.json()
    return j;
}

async function getComment() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/')
    let j = await response.json()
    return j;
}

async function getPost() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let j = await response.json()
    return j;
}


getUser()
    .then((json) => {
        //creating a random post
        postUser = document.createElement("div")
        postUser.setAttribute("id", 'post-div')
        postUser.innerHTML += JSON.stringify(json[Math.floor(Math.random() * 10)]);
        mainContainer = document.getElementsByClassName("container")
        console.log(mainContainer)
        document.body.append(postUser)
        mainContainer.innerHTML += postUser

        address = document.getElementById('address-div')
        for (let i = 0; i < 3; i++ ) {
            address.innerHTML += JSON.stringify(json[i].address)
            address.innerHTML += "<br />"
        }

        users = document.getElementById('user-div')
        for (let i = 0; i < 3; i++ ) {
            users.innerHTML += JSON.stringify(json[i].username)
            users.innerHTML += "<br />"
        }
})

getComment() 
    .then((json) => {
        comment1 = document.getElementById('comment1')
        comment1.innerHTML += JSON.stringify(json[Math.floor(Math.random() * 10)]);
        comment = document.getElementById('comment-div')
        for (let i = 0; i < 3; i++ ) {
            comment.innerHTML += json[i].body
            comment.innerHTML += "<br />"
        }
})

getPost()
    .then((json) => {
        post1 = document.getElementById('post1')
        post1.innerHTML += json[0].body
        posts = document.getElementById('post-div')
        posts.innerHTML += json[1].body
})
