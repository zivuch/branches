let article = document.getElementsByTagName("article")[0]
let lastart = document.getElementsByTagName("p")[3]
article.removeChild(lastart)
let h2 = document.getElementsByTagName("h2")[0]
// h2.addEventListener("click",changeColor)
// function changeColor(event){
//     event.target.style.background = "red"
// }
let h1 = document.getElementsByTagName("h1")[0]
function changeFont(){
   let rand = Math.floor(Math.random() * 101);
   h1.style.fontSize = `${rand}px`;
}
changeFont()
let h3 = document.getElementsByTagName("h3")[0]
h3.addEventListener("click",disapear)
function disapear(){
    h3.style.display = "none";
}
let p = document.getElementsByTagName("p")
let button = document.getElementsByTagName("button")[0]
button.addEventListener("click",bold)
function bold(){
    for (const i of p) {
        i.style.fontWeight = "bold";
    }
}
let form = document.forms[0];
form.addEventListener("submit", changeInput)

function changeInput(event){
    for (const elem of event.target.elements) {
        if(elem.value == ""){
            return
        }
        else if (elem.name == 'fname' || elem.name == 'lname'){
            let newTextNode = document.createTextNode(elem.value);
            let div = document.getElementsByTagName("div")[0]
            div.appendChild(newTextNode)
       console.log( elem.value)
        }
    }
    event.preventDefault()

}
// let h2 = document.getElementsByTagName("h2")[0]
h2.addEventListener("mouseover",fade)
function fade(){
    console.log("hello")
    h2.style.opacity= "0.5"
}
