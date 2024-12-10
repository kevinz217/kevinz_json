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

getUser()
    .then((json) => {
    address1 = document.getElementById('address1')
    address1.innerHTML = JSON.stringify(json.address)
})

getComment() 
    .then((json) => {
    comment1 = document.getElementById('comment1')
    comment1.innerHTML = json.body
})