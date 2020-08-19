//(step 1) to target the "enter" button
var button = document.getElementById("enter");
//(step 2) to target the input search bar
var input = document.getElementById("userinput");
//(step 5) ul is prepped for addition of a new li
var ul = document.querySelector("ul");

//(step 11) to access input.value.length without typing it every time it's needed
function inputLength(){
   return input.value.length;
}

//

//(step 3) to activate the clickability of the "enter" button
button.addEventListener("click", function(){
   //(step 8) to prevent addition of empty li on clicking enter button
   if (input.Length() > 0){
       //(step 4) to add a new li
   var li = document.createElement("li");
   //(step 7) to attach a new input value as the new li
   li.appendChild(document.createTextNode(input.value));
   //(step 6) new li is added to ul
   ul.appendChild(li);
   //(step 9) to make the search bar empty after inputing a new li
   input.value="";
   }  
})

//(step 10) to input a new li by clicking the "enter" keypad on PC keyboard
// and not by clicking "enter" in the html display, copy and paste
// the above, below then include method event.keyCode
input.addEventListener("keypress", function(){
   if (input.Length > 0 && event.keyCode === 13){
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(input.value));
       ul.appendChild(li);
       input.value="";
   }
})   
