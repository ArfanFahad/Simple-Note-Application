{/* <div id="container" class="m-20 p-10 text-center">
    <button id="btn" class="bg-yellow-300 font-serif px-8 py-1">Click</button>
    <p id="text" class="mt-4 font-serif">Some text</p>
  </div> */}


// const contain = document.getElementById("container"); 
// const myButton = document.getElementById("btn"); 
// const myText = document.getElementById("text"); 



//Chaning the text content of an element 
/* 
myButton.addEventListener("click", function(e) {
    e.preventDefault(); 
    myText.textContent = "This is new text"; 
})
    */ 



{/* <div>
  <ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  <button onclick="addItem()">Click</button>
</div> */}

// function addItem () {
//     let newItem = document.createElement("li"); 
//     newItem.textContent = "New Item"; 
//     document.getElementById("myList").appendChild(newItem); 
// }


// function items() {
//   let newItems = document.createElement("li"); 
//   // newItems.textContent = "Apple"; 
//   // newItems.style.marginTop = "20px"; 
//   // newItems.style.fontSize = "30px"; 
//   // document.getElementById("unorder").appendChild(newItems); 
  
// }


let btn = document.querySelector("#myBtn"); 
let counter = 1; 

function add() {
  let input = document.querySelector("#input1").value; 
  let items = document.createElement("li"); 
  //style
  items.style.marginTop = "20px"; 
  items.style.fontSize = "20px";
  // items.textContent = input; 
  if (input == "") {
    alert("Please Insert a Note!"); 
  } else {
    items.textContent = `${counter}. ${input}`; 
    let myList = document.querySelector("#unorder"); 
    myList.appendChild(items); 
    counter++;   
  }
}

function refresh () {
  let item = document.getElementById("unorder"); 
  item.textContent = ""; 
  counter = 1; 
}

