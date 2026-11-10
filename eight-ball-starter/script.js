// show the question

function askEightball(){
let UserName = document.getElementById('nameInput').value
let UserQuestion = document.getElementById('questionInput').value

console.log(UserName, UserQuestion)

 document.getElementById('questionOut').textContent = "you asked " + UserQuestion

if (UserQuestion === "") {
    document.getElementById('questionOut').textContent = "Enter a Question";
} else {
    document.getElementById('questionOut').textContent = UserQuestion;
}

let greeting = "";

if (UserName === "") {
    greeting = "Hello Mystery Person";
} else {
    greeting = "Hello " + UserName + "!";
}

document.getElementById('greeting').textContent = greeting;

if (UserQuestion ==="") {
document.getElementById ('questionOut').textContent = ""
document.getElementById ('answer').textContent = "Enter a question"
document,getElementById('answerType').innerHTML = ""
return
}

// enter a random number
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
    eightBall = "Without a doubt";
} else if (randomNumber === 3) {
    eightBall = "Yes definitely";
} else if (randomNumber === 4) {
    eightBall = "Ask again later";
} else if (randomNumber === 5) {
    eightBall = "Cannot predict now";
} else if (randomNumber === 6) {
    eightBall = "Don't count on it";
} else {
    eightBall = "Very doubtful";
}

document.getElementById('answer').textContent = eightBall;




// get the magic 8 ball awnser










// show the 8ball type badge









}

