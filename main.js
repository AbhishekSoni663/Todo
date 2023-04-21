// let form = document.querySelector('form')
// let ul = document.querySelector('ul')
// let input = document.querySelector('input')

// //

// form.addEventListener('submit' , runEvent)
// function runEvent(e){
//     e.preventDefault()

//     let newLi = document.createElement('li')
//     newLi.innerText = input.value
//     newLi.className = 'list-group-item'

//     let delBtn = document.createElement('button')
//     delBtn.innerText='Delete'
//     delBtn.className='btn btn-danger rounded-0 float-end'
//     newLi.appendChild(delBtn)
//     ul.appendChild(newLi)
//     form.reset()
// }

// ul.addEventListener('click' , deleteText)
// function deleteText(e){
//     if(e.target.className.includes('btn')){
//       let li = e.target.parentElement
      
//       if(window.confirm('Are You Sure')){
//         ul.removeChild(li)
//       }

//     }
// }


// let form = document.querySelector('form')
// let input = document.querySelector('input')
// let ul = document.querySelector('ul')
// const todolist = document.getElementsByClassName('todolist')
// form.addEventListener('submit', runEvent)
// function runEvent(e){
//     e.preventDefault()
    
//     let newLi = document.createElement('li')
//     newLi.innerText = input.value
//     newLi.className = "list-group-item"

//     let li=document.createElement('li')
//     let inputValue = document.getElementById('myInput').value
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t)
//     if(inputValue === ""){
//         alert('You Must write Something!')
//     }else{
//         document.getElementById('myUl');
//     }
//     document.getElementById('myInput').value="";


//     let checkBox = document.createElement('input')
//     checkBox.type = 'checkbox'
//     checkBox.vlaue = 'input' 
//     checkBox.className = 'inp-input'
//     newLi.appendChild(checkBox)

//     let delButton = document.createElement('button')
//     delButton.innerText = 'X'
//     delButton.className = 'btn buttonm btn-danger float-end'
//     newLi.appendChild(delButton)
//     ul.appendChild(newLi)
//     form.reset()
// }
// ul.addEventListener('click' , deleteList)

// function deleteList(e){
//    if(e.target.className.includes('btn')){
//     let li = e.target.parentElement
    
//     if(window.confirm('Are You Sure?')){
//         ul.removeChild(li)
//     }

//    }
// }
let name = document.getElementById("name")
let email = document.getElementById("email")
let contact = document.getElementById("contact")
let relation = document.getElementById("relation")
let link = document.getElementsByClassName(".link")

let button = document.getElementById("btn")
let main = document.getElementById("main")
let nav = document.getElementById("nav")
let ul = document.querySelector('ul')
let out = document.getElementById("out")

const form = document.querySelector("form")

btna.addEventListener("click", changCol)
function changCol(e){
    document.getElementById("main").style.backgroundColor = "#bcf5b8"
}

btnb.addEventListener("click", changColb)
function changColb(e){
    document.getElementById("out").style.backgroundColor = "#004c4c"
}

form.addEventListener('submit', runEvent)
function runEvent(e){
    e.preventDefault(e)

    let ul = document.createElement('li')
    ul.className="list-group"
    // ul.style.display="block"
    out.appendChild(ul)

    out.style.display="flex"
    out.style.flexDirection="row"
    out.style.flexWrap="wrap"
    // out.style.borderRadius="40px"
    let removeClass = document.querySelectorAll('h').length

    let outputName = document.createElement('h')
    outputName.innerText = "Name :"+ name.value
    outputName.className = "inp-name"
    ul.appendChild(outputName)



    let outputEmail = document.createElement('h')
    outputEmail.innerText = "Email :" + email.value
    outputEmail.className = "inp-email"
    ul.appendChild(outputEmail)

    let outputContact = document.createElement('h')
    outputContact.innerText = "Contact :" + contact.value
    outputContact.className = "inp-contact"
    ul.appendChild(outputContact)

    let outputRelation = document.createElement('h')
    outputRelation.innerText = "Relation :" + relation.value
    outputRelation.className = "inp-relation"
    ul.appendChild(outputRelation)

    let whatsApp = document.createElement('a')
    whatsApp.style.textDecoration = "none"
    whatsApp.className = "bi bi-whatsapp"
    whatsApp.setAttribute("href","https://api.whatsapp.com/send?phone" + contact.value)
    ul.appendChild(whatsApp)

    let callMe = document.createElement('a')
    callMe.className = "bi bi-telephone"
    callMe.setAttribute("href", "tel:" + contact.value )
    ul.appendChild(callMe)

    form.reset()
}

ul.addEventListener('click', deleteTask)
function deleteTask(e){
    if(e.target.className.includes('btn')){
        let li = e.target.parentElement
        if(window.confirm('Is This Right')){
            ul.removeChild(li)
        }
    }
}