/* selector  */
let section = document.getElementsByTagName("section")
let header = document.getElementsByTagName("header")

header[1].style.display = "none"

/* creating  text node in section  */

let textNode = document.createElement("div")
textNode.textContent = "No Item in the todo list ";

section[0].appendChild(textNode);

console.log(section[0])

if(section[0].childNodes.length === 0){
    textNode.style.display = "block";
}



/* addEventListener to show Popup  */
let addItem1 = document.getElementById("addItem1")
addItem1.addEventListener("click",()=>{
    let heading = "Add new list";
    popUp(addItem1 , heading);
})

/* Function one Create PopUP */
function popUp(button, heading, newTask){
    // disableing the buttons
      button.style.pointerEvents = "none";
    // PopUp
    let popUp = document.createElement("div");
    popUp.className = "popUp";
    popUp.id = "popUp";

     // PopUp header 
     let popUphead = document.createElement("div");
     popUphead.className = "popUpHead";
     popUp.textContent = heading;

    //  PopUp input 
    let popUpInput = document.createElement("input");
    popUpInput.type = "text";
    popUpInput.placeholder = heading;


    // popUp button 
    let popUpButtons = document.createElement("div")
    popUpButtons.className = "popUpButtons"

    // addBtn 
    let addBtn = document.createElement("button")
    addBtn.className = "addBtn";
    addBtn.textContent = "Add";

    // closeBtn
    let closeBtn = document.createElement("button")
    closeBtn.className = "closeBtn"
    closeBtn.textContent = "Close"


    // Connecting node to  HTML document 
    document.body.appendChild(popUp);
    popUp.appendChild(popUphead);
    popUp.appendChild(popUpInput)
    popUp.appendChild(popUpButtons)
    popUpButtons.appendChild(addBtn)
    popUpButtons.appendChild(closeBtn)



    /* Pop  Blur features  */
    section[0].classList.add("blur");
    header[0].classList.add("blur");
    header[1].classList.add("blur");

    // Pop Transition features 
    popUp.classList.add("popTransition")

/*=========== Close the pop up ================== */
    // Close the popUp with Close Btn 
    closeBtn.addEventListener("click",()=>{
        closeTask()
    })

    /* close popUp function  */
    function closeTask(){
        section[0].classList.remove("blur");
        header[0].classList.remove("blur");
        header[1].classList.remove("blur");
        popUp.remove()

            // enabling buttons
    button.style.pointerEvents = "auto";
    // removing the animation class
    popUp.classList.remove("popTransition");
    }

    /* Close the popUp click on addBtn and create New Task */
    addBtn.addEventListener("click",()=>{
        if(popUpInput.value){
            let flag = "true";
            if(heading === "Add new list"){
                addNewCard(popUpInput.value, !flag)
            }
            if(heading === "Add new item"){
                subTask(popUpInput.value, newTask);
            }

        }
        if(section[0].childNodes.length !== 0){
            textNode.remove()
        }
        let statusAddbtn = true;
        statusOfPopUp(statusAddbtn);
        closeTask();
    })



}


/* Add New Task card  */

function addNewCard(headingText, flag){

    // Add New task Node
    let newTask = document.createElement("div");
    newTask.className = "newTask";

    // new task newTaskHeading
    let newTaskHeading = document.createElement("div")
    newTaskHeading.className = "newTaskHeading"
    newTaskHeading.textContent = headingText; 

    //  division line 
    let line = document.createElement("div")
    line.className = "line";

    // newtask Description 
    let newTaskDescription = document.createElement("div");
    newTaskDescription.className = "newTaskDescription";

    // new TaskBtn for making the task is done 
    let newTaskBtn = document.createElement("button");
    newTaskBtn.className = "newTaskBtn";
    newTaskBtn.textContent = "Mark Done"

    // new Task buttons 
    let newTaskbuttons = document.createElement("div");
    newTaskbuttons.className = "newTaskbuttons"

    // new Task Delete button 
    let newTaskDelete = document.createElement("i")
    newTaskDelete.className = "fa-solid fa-trash-can newTaskDelete"

    // new Task plus button 
    let newTaskplus = document.createElement("i");
    newTaskplus.className = "fa-sharp fa-solid fa-circle-plus newTaskplus"



/*================================== Create New task and Add new sub task ======================================= */
                    
// if flag is true then subtask will added in the Tasklist

if(flag){
    section[0].appendChild(newTask);
    newTask.appendChild(newTaskHeading);
    newTask.appendChild(line);
    newTask.appendChild(newTaskbuttons);
    newTaskbuttons.appendChild(newTaskDelete);
    newTaskbuttons.appendChild(newTaskplus);
    newTask.appendChild(newTaskDescription);
    newTaskDescription.appendChild(newTaskBtn);
    console.log(headingText);
    newTaskDescription.innerHTML = headingText;    
}
else{
    // connecting nodes 
    section[0].appendChild(newTask);
    newTask.appendChild(newTaskHeading);
    newTask.appendChild(line);
    newTask.appendChild(newTaskbuttons);
    newTaskbuttons.appendChild(newTaskDelete);
    newTaskbuttons.appendChild(newTaskplus);
}


// Change text line-through when we click on mark done Button 
newTaskBtn.addEventListener("click",()=>{
    change();
})
function change(){
    newTaskDescription.style.textDecoration = "line-through"
    newTaskDescription.style.color = "red";
}

// Create a subTask on click the plus btn
newTaskplus.addEventListener("click",()=>{
    let createSubTaskHeading = "Add new item";
    popUp(newTaskplus, createSubTaskHeading, newTask)
})

// delete the Task Card 
newTaskDelete.addEventListener("click",()=>{
    newTask.remove()
    if(section[0].childNodes.length === 0){
        section[0].appendChild(textNode)
    }
})

newTaskHeading.addEventListener("click",()=>{
    SelectCard(newTaskHeading.innerHTML, newTask)
})

window.value = newTask;
}


/* Subtask Function is used to Create The subtasks by taking value from input */

function subTask(value, headNode){
    // New Task description 
    let newTaskDescription =document.createElement("div");
    newTaskDescription.className = "newTaskDescription";
    newTaskDescription.textContent = value;

    // new task btn 
    let newTaskBtn =document.createElement("button");
    newTaskBtn.className = "newTaskBtn";
    newTaskBtn.textContent = "Mark Done";

    // connecting to the node 
    headNode.appendChild(newTaskDescription);
    newTaskDescription.appendChild(newTaskBtn)

    newTaskBtn.addEventListener("click",()=>{
        change();
    });
    function change(){
        newTaskBtn.remove()
        newTaskDescription.style.textDecoration = "line-through";
        newTaskDescription.style.color = "red";
    }
}

/*=========================== Page : 2 ===============================*/
// After Click on Heading of card 
function SelectCard(cardHeading, node){
    // changing the header 
    header[1].style.display = "flex"
    header[0].style.display = "none"
    document.getElementById("addItemsContainer");
    document.getElementById("addItemsContainer");
    addItemsContainer.innerHTML = cardHeading;

    // changing the section
    section[0].style.visibility = "hidden"

     //  center the selected div
     node.classList.add("newTask2");
}


// after clicking back goto main page 

function unSelectCard(){
    // chaning the header 
    header[1].style.display ="none"
    header[0].style.display = "flex"
    document.getElementById("addItemsContainer");
    addItemsContainer.innerHTML = "";

    // Changing the section 
    section[0].style.visibility = "visible"

    //center the selected div
    console.log(section[0].childNodes.length);
    console.log(section[0].childNodes);
    for (let i = 0; i < section[0].childNodes.length; i++) {
        section[0].childNodes[i].classList.remove("newTask2");
      }
}

// second page function

let addItem2 = document.getElementById("addItem2");
let isBtnClick = false;

addItem2.addEventListener("click", () => {
  let statusAddBtn = false;
  popUp(addItem2, "Add new list", window.value, statusAddBtn);
});
// add btn is pressed
function statusOfPopUp(statusAddBtn) {
  if (statusAddBtn) {
    unSelectCard();
  }
}

// back btn 
let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
  unSelectCard();
});