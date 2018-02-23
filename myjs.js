let myValue = document.getElementById("input");
const button =document.getElementById("submit");
button.onclick = () =>{
if(myValue.value==="")
alert("Hey! write something");
else
alert("Okay, you typed: "+ myValue.value);
}