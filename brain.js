// Stores info to conviniently access about the game
class GameInfo {
    constructor() {
            this._players = ['', '', '', '']; 
            this._playerScores = [0, 0, 0, 0];
            this._gameStates = [
                document.getElementById("state0"),
                document.getElementById("state1"),
                document.getElementById("state2")
            ];
            this._numOfRounds = 0;
            this._currentState = 0;        
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
    setCurrentState(state) {
        this._currentState = state;
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

// When the window loads it brings up the first card
window.onload = () => {enterState(0);}
