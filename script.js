

let btn = document.querySelector("#myBtn"); 
let counter = 1; 

function add() {
  let input = document.querySelector("#input1").value; 
  let items = document.createElement("li"); 
  items.style.marginTop = "20px"; 
  items.style.fontSize = "20px";

  if (input == "") {
    alert("Please Insert a Note!"); 
  } else {
    items.textContent = `${counter}. ${input}`; 
    let myList = document.querySelector("#unorder"); 
    myList.appendChild(items); 
    document.getElementById("input1").value = ""; 
    counter++;   
  }
}

function refresh () {
  let item = document.getElementById("unorder"); 
  item.textContent = ""; 
  let refreshInput = document.querySelector("#input1").value; 
  refreshInput.value == ""; 

  counter = 1; 
}

