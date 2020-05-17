var c1= document.getElementById("color1")
var c2=document.getElementById("color2")
var body=document.getElementsByTagName("body")[0];
var p= document.getElementsByTagName("h3")[0];
var sect=document.querySelector("section")
 
c1.addEventListener("input",setvalue);
c2.addEventListener("input",setvalue);
function setvalue(){
    body.style.background="linear-gradient(to right, "+c1.value+", "+c2.value+")";
    p.textContent =body.style.background+";";    
}
