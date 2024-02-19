//const newH1= document.createElement("h1")
//newH1.textContent = "I like pizza!";
//newH1.id = "myH1"
//newH1.style.color = "tomato";
//newH1.style.textAlign = "center";

//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//const box2 = document.getElementById("box4");
//document.body.insertBefore(newH1, box4);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[0]);

//document.body.append(newH1);
//document.body.removeChild(newH1);

//document.getElementById("box1").append(newH1);
//document.getElementById("box1").removeChild(newH1);

//---------------------------------------------------

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//document.body.append(newListItem);
//document.body.prepend(newListItem);

//document.getElementById("fruits").append(newListItem);
//document.getElementById("fruits").prepend(newListItem);

//const apple = document.getElementById("apple");
//document.getElementById("fruits").insertBefore(newListItem, apple);

const newListItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, newListItems[3]);

//document.getElementById("fruits").removeChild(newListItem);
