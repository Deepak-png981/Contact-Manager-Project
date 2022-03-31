// fetching the HTML element
const btn = document.getElementById("btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const contactList = document.getElementById("contact-list");

//setting clickable event on btn
btn.addEventListener("click" , function(e){
    //to prevent the default nature of the form of submitting
    e.preventDefault();
    //checking the validity of the form, name or email is empty or not
    //basically it is a inbuil function having boolean return type
    const isValid = form.checkValidity();
    if(isValid){
        //calling the createContact function on clicking submit button
    createContact();
    //After running the createContact function the name and email should
    // automatically be cleared from the screen
    name.value = "";
    email.value = "";
    }
    else{
        console.log("Kindly fill the complete form");
    }
    
    
})

//creating contact functionn
function createContact(){
    const plate = document.createElement("div");
    plate.setAttribute("id" , "contact");
    //setting the HTML of the div using javascript
    plate.innerHTML = `<p id="nameDisplay"> ${name.value} </p>
                        <p id="emailDisplay"> ${email.value} </p>
                        <button id="delete" onclick = "remove(this)" >Delete</button>`;
    contactList.appendChild(plate);
}

//making the delete button work properly
function remove(contact){
    var element = contact;
    element.parentElement.remove();
}