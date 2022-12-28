let comp = () => {
    let ai;
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            ai = "r";
            break;
        case 1:
            ai = "p";
            break;
        case 2:
            ai = "s";
    }
    return ai;
}

let user = 0;
let computer = 0;

let choice = (x) => {
    let y = comp();
    if (x == "r" && y == "r") {
        document.getElementById("result-comp-stat").innerText = "Computer: Rock";
        document.getElementById("result-user-stat").innerText = "User: Rock";
        document.getElementById("result-final-stat").innerText = "Winner: none";
    }
    else if (x == "r" && y == "p") {
        computer++;
        document.getElementById("compScoreVal").innerText = computer;
        document.getElementById("result-comp-stat").innerText = "Computer: Paper";
        document.getElementById("result-user-stat").innerText = "User: Rock";
        document.getElementById("result-final-stat").innerText = "Winner: Computer";
    }
    else if (x == "r" && y == "s") {
        user++;
        document.getElementById("userScoreVal").innerText = user;
        document.getElementById("result-comp-stat").innerText = "Computer: Scissors";
        document.getElementById("result-user-stat").innerText = "User: Rock";
        document.getElementById("result-final-stat").innerText = "Winner: User";
    }
    else if (x == "p" && y == "r") {
        user++;
        document.getElementById("userScoreVal").innerText = user;
        document.getElementById("result-comp-stat").innerText = "Computer: Rock";
        document.getElementById("result-user-stat").innerText = "User: Paper";
        document.getElementById("result-final-stat").innerText = "Winner: User";
    }
    else if (x == "p" && y == "p") {
        document.getElementById("result-comp-stat").innerText = "Computer: Paper";
        document.getElementById("result-user-stat").innerText = "User: Paper";
        document.getElementById("result-final-stat").innerText = "Winner: none";
    }
    else if (x == "p" && y == "s") {
        computer++;
        document.getElementById("compScoreVal").innerText = computer;
        document.getElementById("result-comp-stat").innerText = "Computer: Scissors";
        document.getElementById("result-user-stat").innerText = "User: Paper";
        document.getElementById("result-final-stat").innerText = "Winner: Computer";
    }
    else if (x == "s" && y == "r") {
        computer++;
        document.getElementById("compScoreVal").innerText = computer;
        document.getElementById("result-comp-stat").innerText = "Computer: Rock";
        document.getElementById("result-user-stat").innerText = "User: Scissors";
        document.getElementById("result-final-stat").innerText = "Winner: Computer";
    }
    else if (x == "s" && y == "p") {
        user++;
        document.getElementById("userScoreVal").innerText = user;
        document.getElementById("result-comp-stat").innerText = "Computer: Paper";
        document.getElementById("result-user-stat").innerText = "User: Scissors";
        document.getElementById("result-final-stat").innerText = "Winner: User";
    }
    else if (x == "s" && y == "s") {
        document.getElementById("result-comp-stat").innerText = "Computer: Scissors";
        document.getElementById("result-user-stat").innerText = "User: Scissors";
        document.getElementById("result-final-stat").innerText = "Winner: none";
    }
}

document.getElementById("r").addEventListener("click", function () {
    choice("r");
});
document.getElementById("p").addEventListener("click", function () {
    choice("p");
});
document.getElementById("s").addEventListener("click", function () {
    choice("s");
});
