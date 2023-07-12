let score = {0: "rock", 1: "paper", 2: "scissors"};

document.querySelector(".new-game").addEventListener("click", function() {
    location.reload();
})


function compImage (comp) {
    document.querySelector(".computer-outcome").innerHTML = `
    <img src="images/${score[comp]}.png" class="emoji">`;
}

function play (user) {
    let compResult = Math.floor(Math.random() * Object.keys(score).length);

    if (user == 'rock' && compResult == 0 || user == 'paper' && compResult == 1 || user == 'scissors' && compResult == 2) {
        document.querySelector(".result").innerHTML = "You TIED";
        document.querySelector(".tied-score").innerHTML ++;
    }
    else if (user == 'rock' && compResult == 1 || user == 'paper' && compResult == 2 || user == 'scissors' && compResult == 0) {
        document.querySelector(".result").innerHTML = "You LOST";
        document.querySelector(".lost-score").innerHTML ++;
    }
    else {
        document.querySelector(".result").innerHTML = "You WON!!!";
        document.querySelector(".won-score").innerHTML ++;
    }
    compImage(compResult);
}