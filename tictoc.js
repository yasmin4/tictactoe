// Possible position for game over
const possibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to reset game
function myfunc_2() {
    location.reload();
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).value = '';        
    }
}

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0
var flag = 1;
function user_choice(event) {
    const choice = event.target.id;
    document.getElementById(choice).value = flag ? "X" : "0";
    document.getElementById(choice).disabled = true;
    flag = flag ? 0 : 1;
    checkIsGameOver();
}

function disableAnotherPosition(current_position) {
    for (let i = 0; i < current_position.length; i++) {
        if (!current_position[i]) {
            // Disable
            document.getElementById(`b${i + 1}`).disabled = true;
        }
    }
};

function checkIsGameOver() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;
    const current_position = [
        b1, b2, b3, b4, b5, b6, b7, b8, b9
    ];
    for (let i = 0; i < possibilities.length; i++) {
        const singlePossibility = possibilities[i];

        if (
            current_position[singlePossibility[0]] &&
            current_position[singlePossibility[1]] &&
            current_position[singlePossibility[2]] &&
            current_position[singlePossibility[0]] === current_position[singlePossibility[1]] &&
            current_position[singlePossibility[1]] === current_position[singlePossibility[2]] &&
            current_position[singlePossibility[2]] === current_position[singlePossibility[0]]
        ) {
            // game over
            const winner = current_position[singlePossibility[0]];
            alert(`Player with sign ${winner} is win`);
            disableAnotherPosition(current_position);
            break;
        }
    }
};