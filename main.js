let newElement  = document.createElement("h4");
newElement.textContent = "System Online: Course trajectory activated."
newElement.style.zIndex = "1";
newElement.style.textAlign = "center";
newElement.style.color = "white";

let newElement2 =  document.createElement("h4");
newElement2.textContent = "System Offline: Off Course.";
newElement2.style.zIndex = "1";
newElement2.style.textAlign = "center";
newElement2.style.color = "white";

window.onload=function()
{



//     // only can be added once page is loaded
// const newElement=document.createElement("p");
// newElement.textContent ="Hello from Javascript!";
// document.body.appendChild(newElement);

this.setTimeout(function(){
  if (navigator.onLine)
{
    this.console.log("online");
  onFunction();
  
}
else
 {
    this.console.log("offline");
   offFunction();
 }

}, 100)

}

function onFunction() {

    document.body.style.background = "url('ship.gif')";
    document.body.style.backgroundSize  =  "cover";
    // newElement = document.createElement("h4");
    document.body.appendChild(newElement);
    document.body.removeChild(newElement2);
    // newElement.textContent = "System Online: Course trajectory activated."
    // newElement.style.zIndex = "1";
    // newElement.style.textAlign = "center";
    // newElement.style.color = "white";
    
  
}

function offFunction()
{
    document.body.style.background = "url('lost.gif')";
    document.body.style.backgroundSize  =  "cover";
    document.body.appendChild(newElement2);
    document.body.removeChild(newElement);
    // newElement.textContent = "System Offline: Off Course.";
    // newElement.style.zIndex = "1";
    // newElement.style.textAlign = "center";
    // newElement.style.color = "white";
}
