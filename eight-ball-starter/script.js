// show the question

function askEightball(){
let UserName = document.getElementById('nameInput').value
let UserQuestion = document.getElementById('questionInput').value

console.log(UserName, UserQuestion)

 document.getElementById('questionOut').textContent = "you asked " + UserQuestion

if(UserQuestion === ""){
document.getElementById('questionOut').textContent = "you asked " + UserQuestion
}else {
  document.getElementById ('questionOut').textContent = "Enter a Question"
}

if (UserName === "") {
greeting = "Hello Mystery Person"
}else {
 greeting + "hello ${UserName}!"
}

document.getElementById('greeting').textContent = greeting

if (UserQuestion ==="") {
document,.getElementById ('questionOut').textContent = ""
document.getElementById ('answer').textContent = "Enter a question"
document,getElementById('answerType').innerHTML = ""
return
}

// enter a random number







// get the magic 8 ball awnser










// show the 8ball type badge









}

