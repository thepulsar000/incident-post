let postEl = document.querySelector("#post");
let outEl = document.querySelector("#out");
let canceEl = document.querySelector("#cancel");
let allPostsContainer = document.querySelector(".acc");

const locInput = outEl.querySelectorAll('input')[0]
const dateInput = outEl.querySelectorAll('input')[1]
const typeInput = outEl.querySelectorAll('input')[2]
const detailsInput = outEl.querySelector('textarea')

postEl.addEventListener("click", ()=>{
    outEl.style = "visibility: visible";
})
function hidePost() {
    outEl.style = "visibility: hidden";
}

canceEl.addEventListener("click", ()=>{
    hidePost()
})



// let x = document.createElement('div')
// x.textContent = 'Whatever'
// x.classList.add('post')
// x.className = 'post'

let num = 9

// allPostsContainer.textContent = `You age is ${num}`

function createPost(){

    // {
    //     locInput.value.length < 1
    //     locInput.value.length < 1
    //     locInput.value.length < 1
    // }



    let newPost = document.createElement('div')
    newPost.className = 'blog'
    newPost.innerHTML = `
    <div class="row1">
      <p class="name">Username</p>
      <p class="date">${dateInput.value}</p>
    </div>

    <div class="row2">
      <div class="locIcon"></div>
      <div class="location">${locInput.value}</div>
    </div>

    <h1 class="type">
    ${typeInput.value}
    </h1>

    <div class="details">${detailsInput.value}</div>

    `

    allPostsContainer.appendChild(newPost)
    hidePost()



}
