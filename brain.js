// Stores info to conviniently access about the game
class GameInfo {
    constructor() {
            this._players = ['', '', '', '']; 
            this._playerScores = [0, 0, 0, 0];
            this._gameStates = [
                document.getElementById("state0"),
                document.getElementById("state1"),
                document.getElementById("state2"),
                document.getElementById("state3"),
                document.getElementById("state4"),
                document.getElementById("state5"),
                document.getElementById("state6")
            ];
            this._numOfRounds = 0;
            this._currentState = 0;
            this._isMultiplayer = false;
            this._exercisesList = ['pushups', 'crunches', 'squats'];
            this._currentExercise = -1;
    }
    getPlayer(i) {
        return this._players[i];
    }
    getPlayerScores(i) {
        return this._playerScores[i];
    }
    getGameStates(i) {
        return this._gameStates[i];
    }
    getNumOfRounds() {
        return this._numOfRounds;
    }
    getCurrentState() {
        return this._currentState;
    }
    getIsMultiplayer() {
        return this._isMultiplayer;
    }
    getExerciseFromList(pos) {
        return this._exercisesList[pos];
    }
    getCurrentExercise() {
        return this._currentExercise;
    }
    setPlayerName(name, pos) {
        this._players[pos] = name;
    }
    setCurrentState(state) {
        this._currentState = state;
    }
    setNumOfRounds(num) {
        this._numOfRounds = num;
    }
    setIsMultiplayer(bool) {
        this._isMultiplayer = bool;
    }
    setCurrentExercise(num) {
        this._currentExercise = num;
    }
}

// Initializes global variable gInfo
var gInfo;

// Assigns a GameInfo object to gInfo once the page fully loads
document.addEventListener('DOMContentLoaded', function(){
    gInfo = new GameInfo();
});

// Pulls up a card. Should rarely be called manually as it is called by exitState()
function enterState(state) {
    gInfo.setCurrentState(state);
    let gState = gInfo.getGameStates(gInfo.getCurrentState());
    gState.style.opacity = "100%";
    gState.style.transform = "translateY(0%)";
}

// Moves a card down and then calls another card up with enterState()
function exitState(nextState) {
    let gState = gInfo.getGameStates(gInfo.getCurrentState());
    gState.style.opacity = "0%";
    gState.style.transform = "translateY(200%)";
    enterState(nextState);
}

// Custom function for State 2 for setting difficulty. No need to check if num is a number as the HTML takes care of that
function setDifficulty(num) {
    gInfo.setNumOfRounds(num);
}

// Custom function for State 1 for setting game mode and for changing states based off the game mode chosen
function state1ExitState(bool) {
    gInfo.setIsMultiplayer(bool);
    if(gInfo.getIsMultiplayer() === true) {
        exitState(3);
    }
    else {
        exitState(2);
    }
}

//Sets player's name for the specified player
function setPlayerName(pos) {
    let name = document.getElementsByClassName("playerNameInput").item(pos).value;
    gInfo.setPlayerName(name, pos);
}

// Custom function that will change a State's information depending on the exercise to save memory
function exitToRandomExercise() {
    let randNum = Math.floor(Math.random() * gInfo._exercisesList.length);
    while(randNum === gInfo.getCurrentExercise()) {
        randNum = Math.floor(Math.random() * gInfo._exercisesList.length);
    }
    gInfo.setCurrentExercise(randNum);
    let exercise = gInfo.getExerciseFromList(randNum);
    switch(exercise) {
        case 'pushups':
            alert('Pushups');
            break;
        case 'crunches':
            alert('Crunches');
            break;
        case 'squats':
            alert('Squats');
            break;
        default:
            alert('An error has occurred in selecting an exercise');
            break;
    }
}

// When the window loads it brings up the first card
window.onload = () => {enterState(0);}
