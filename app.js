let userScore= 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
var audioWin = new Audio('sound/win.wav');
var audioLose = new Audio('sound/lose.wav');
var audioDraw = new Audio('sound/uh.wav');

function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function converToWord(letter){
    if(letter === "r") return 'Rock';
    if(letter === "p") return 'Paper';
    return 'Scissors';
}


function win(userChoice, computerChoice) {
    userScore++;
    audioWin.play();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //const smallUserWord= 'user'.fontsize(3).sup;
   // const smallUserWord= 'comp'.fontsize(3).sup;
    result_p.innerHTML =  converToWord(userChoice) + " beats " + converToWord(computerChoice) + " You win!";
    document.getElementById('b').classList.add('green');
    setTimeout(function(){
        document.getElementById('b').classList.remove('green');
    },300);

}
function lose(userChoice, computerChoice) {
    computerScore++;
    audioLose.play();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =  converToWord(computerChoice) + " beats " + converToWord(userChoice) + " You lose!"
    document.getElementById('b').classList.add('red');
    setTimeout(function(){
        document.getElementById('b').classList.remove('red');
    },300);
}
function draw() {
    result_p.innerHTML= "DRAW!";
    audioDraw.play();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game('r');

})
paper_div.addEventListener('click',function(){
    game('p');

})
scissors_div.addEventListener('click',function(){
    game('s');

})
}

main();