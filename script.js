let btn=document.getElementById("btn");
let joke=document.getElementById("p");
btn.addEventListener("click",function (){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {joke.textContent=data.setup+"-"+data.punchline})
    .catch(error => console.log("Error :", error) )
})