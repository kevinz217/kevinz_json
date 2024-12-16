//least scuffed code i made at 3 am
let dang = 0
async function getUser(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let j = await response.json()
    .then((json) => {
        //creating a random post
        postUser = document.createElement("div")
        postUser.setAttribute("class", 'post-div')
        let randomNum = Math.floor(Math.random() * 10)
        postUser.innerHTML += "Username: " + (json[randomNum]).name;
        postUser.innerHTML += "<br/>"
        postUser.innerHTML += "City: " + (json[randomNum]).address.city;
        postUser.innerHTML += "<br/>"
        document.getElementsByClassName("container")[0].appendChild(postUser)
})
}

async function getComment() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments/')
    let j = await response.json()
    .then((json) => {
        commentList = document.getElementsByClassName('post-div')
        for (let i = 0; i < 3; i++) {
        commentList[dang].innerHTML += json[Math.floor(Math.random() * 300)].body;
        }
    })
    dang++
}

function createPost() {
    getUser().then(getComment)
}

for (let i = 0; i < 20; i++) {
    createPost()
}
  