// Stores info to conveniently  access about the game
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
                document.getElementById("state6"),
                document.getElementById("state7")
            ];
            this._numOfRounds = 0;
            this._currentState = 0;
            this._isMultiplayer = false;
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
function getRandomExercise() {
    let randNum = Math.floor(Math.random() * 20);
    while(randNum === gInfo.getCurrentExercise()) {
        randNum = Math.floor(Math.random() * 20);
    }
    gInfo.setCurrentExercise(randNum);
    var title = null;
    var str = null;
    var picture = null;
    switch(randNum) {
        case 0:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Pushups');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(5);
            break;
        case 1:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Normal Planks');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 2:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Squats');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 3:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Triceps Box Steps');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 4:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Pushups Against Table');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 5:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Bodyweight Triceps Dip');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 6:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Shoulder Pushup Taps');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 7:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Diamond Pushup');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 8:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Squats');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 9:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Lunges');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 10:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Jump Squats');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 11:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Wall Sits');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 12:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Step Ups');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 13:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Calf Raises');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 14:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Lunge Jump');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 15:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Commando Planks');
            title.appendChild(str);
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 16:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Single Hand Plank');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 17:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Single Leg Plank');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 18:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Situps');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 19:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Burpees');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "https://i.kym-cdn.com/photos/images/newsfeed/001/956/027/fee.jpg";
            picture.style.height = "20em";
            picture.style.width = "40em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        default:
            alert('An error has occurred in selecting an exercise');
            break;
    }
}

function startExercise() {
    switch(gInfo.getCurrentExercise()) {
        case 0:

    }
}
function exitToRandomExercise() {
    document.getElementById("state4h1").remove();
    document.getElementById("state4img").remove();
    getRandomExercise();
}

// When the window loads it brings up the first card
window.onload = () => {enterState(0);}
