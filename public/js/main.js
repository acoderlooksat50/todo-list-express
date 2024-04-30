const deleteBtn = document.querySelectorAll('.fa-trash') //sets this class as a variable deletBtn
const item = document.querySelectorAll('.item span') //sets this class as a variable item
const itemCompleted = document.querySelectorAll('.item span.completed') //set this class as a variable itemCompleted

//makes items in deleteBtn an array and adds an event listner to each one
Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})
//makes items in item an array and adds an event listner to each one
Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})
//makes items in itemCompleted an array and adds an event listner to each one
Array.from(itemCompleted).forEach((element)=>{
    element.addEventListener('click', markUnComplete)
})

async function deleteItem(){  //starts an async function
    const itemText = this.parentNode.childNodes[1].innerText //variable that will hold the text from the list item span
    try{
        const response = await fetch('deleteItem', { //response variable 
            method: 'delete', //delete method
            headers: {'Content-Type': 'application/json'}, //header content type of json
            body: JSON.stringify({ //body that will be string of JSON
              'itemFromJS': itemText  //itemFromJS will be the innerText from the list item span
            })
          })
        const data = await response.json() 
        console.log(data)
        location.reload()

    }catch(err){ //returns an error if the try does not work
        console.log(err)
    }
}

async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUnComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUnComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}