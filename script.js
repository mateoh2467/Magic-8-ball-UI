document.getElementById("askButton").addEventListener('click', function(){
let answer = '';
let randomIndex=Math.floor(Math.random()*5)
if(randomIndex === 0){
    answer = "it is certain";
} else if (randomIndex === 1){
    answer = "Ask again later";
} else if (randomIndex === 2){
    answer = "Yes, definetely";
} else if (randomIndex === 3){
    answer = "My reply is no";
} else if (randomIndex === 4){
    answer = "I cannot predict now";
} else {
    answer = "very doubtful";
} 

//Check if a questino is asked, trim method 
let question = document.getElementById('question').value;
if (question.trim() === ''){
    alert("Please enter a question");
} else {
    document.getElementById('answer').textContent = answer
}

});

