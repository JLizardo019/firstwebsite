let newElement = document.createElement("h4");
newElement.textContent = "System Online: Course trajectory activated.";
newElement.style.zIndex = "1";
newElement.style.textAlign = "center";
newElement.style.color = "white";

let newElement2 = document.createElement("h4");
newElement2.textContent = "System Offline: Off Course.";
newElement2.style.zIndex = "1";
newElement2.style.textAlign = "center";
newElement2.style.color = "white";

//     // only can be added once page is loaded
// const newElement=document.createElement("p");
// newElement.textContent ="Hello from Javascript!";
// document.body.appendChild(newElement);

window.onload = function() {
  onFunction();
};

window.addEventListener("offline", function() {
  this.console.log("went offline");
  offFunction();
});

window.addEventListener("online", function() {
  this.console.log("got online!");
  onFunction();
});

function onFunction() {
  document.body.style.background = "url('ship.gif')";
  document.body.style.backgroundSize = "cover";
  document.body.appendChild(newElement);
  // if (document.body.)
  // document.body.removeChild(newElement2);
}

function offFunction() {
  document.body.style.background = "url('lost.gif')";
  document.body.style.backgroundSize = "cover";
  document.body.appendChild(newElement2);
  document.body.removeChild(newElement);
}
