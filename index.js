async function getUser(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let j = await response.json()
    return j;
}

async function getComment() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/1')
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
        address = document.getElementById('address-div')
        for (let i = 0; i < 3; i++ ) {
            address.innerHTML += JSON.stringify(json[i].address)
            address.innerHTML += "<br />"
        }

        users = document.getElementById('user-div')
        for (let i = 0; i < 3; i++ ) {
            users.innerHTML += JSON.stringify(json[i])
            users.innerHTML += "<br />"
        }
})

getComment() 
    .then((json) => {
    comment1 = document.getElementById('comment1')
    comment1.innerHTML += json.body
})

getPost()
    .then((json) => {
        post1 = document.getElementById('post1')
        post1.innerHTML += json[0].body
        posts = document.getElementById('post-div')
        posts.innerHTML += json[1].body
})
