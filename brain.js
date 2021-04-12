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
                document.getElementById("state7"),
				document.getElementById("state8"),
				document.getElementById("state9")
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
	setPlayerScore(pos, score) {
		this._playerScores[pos] = score;
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
    calculateScore() {
        let pos = 0;
        let highestScore = 0;
        for(let i = 0; i < this._playerScores.length; ++i) {
            if(this._playerScores[i] > highestScore) {
                highestScore = this._playerScores[i];
                pos = i;
            }
        }
        this._playerScores[pos] += 10;
    }
}

// Initializes global variable gInfo
var gInfo;
var minutesLabel;
var secondsLabel;
var roundsFinished;

// Assigns a GameInfo object to gInfo once the page fully loads
document.addEventListener('DOMContentLoaded', function(){
    gInfo = new GameInfo();
    minutesLabel = document.getElementById("minutes");
    secondsLabel = document.getElementById("seconds");
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
function setDifficulty() {
    let num = document.getElementById("difficultyinput").value;
    if(num < 1) num = 1;
    gInfo.setNumOfRounds(num);
	roundsFinished = 0;
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
    let title = null;
    let str = null;
    let picture = null;
    switch(0) {
        case 0:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode(`Pushups - Round ${(gInfo.getNumOfRounds() - roundsFinished + 1)}`);
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "pushup.gif";
            picture.style.height = "20em";
            picture.style.width = "30em";
            document.getElementById("state4content").style.textAlign = "center";
            document.getElementById("state4content").appendChild(picture);
            exitState(4);
            break;
        case 1:
            title = document.createElement("h1");
            title.id = "state4h1";
            str = document.createTextNode('Normal Planks');
            title.appendChild(str);
            document.getElementById("state4content").appendChild(title);
            picture = document.createElement("img");
            picture.id = "state4img";
            picture.src = "pushup.gif";
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

function setScore(pos, score) {
	gInfo.setPlayerScore(pos, score);
}

function finishExercise() {
    clearInterval(timer);
    exitToState6();
}

function showPlayerScores() {
	if(!gInfo.getIsMultiplayer()) {
		document.getElementById("state7score").innerHTML = `Your score is:${gInfo.getPlayerScores[0]}`;
	}
}

var totalSeconds = 0;
var timer;

function setTime() {
	++totalSeconds;
	secondsLabel.innerHTML = pad(totalSeconds % 60);
	minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	if(totalSeconds >= 3) {
		finishExercise();
	}
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function startExercise() {
    document.getElementById("state5h1").remove();
    document.getElementById("state5img").remove();
    let title = null;
    let str = null;
    let picture = null;
    switch(0) {
        case 0:
            if(!gInfo.getIsMultiplayer()) {
                title = document.createElement("h1");
                title.id = "state5h1";
                str = document.createTextNode('Pushups');
                title.appendChild(str);
                document.getElementById("state5title").insertBefore(title, document.getElementById("timer"));
                picture = document.createElement("img");
                picture.id = "state5img";
                picture.src = "pushup.gif";
                picture.style.height = "20em";
                picture.style.width = "30em";
                document.getElementById("state5content").style.textAlign = "center";
                document.getElementById("state5content").appendChild(picture);
                exitState(5);
                timer = setInterval(setTime, 1000);
            } else {
                title = document.createElement("h1");
                title.id = "state5h1";
                str = document.createTextNode('Pushups');
                title.appendChild(str);
                document.getElementById("state5title").insertBefore(title, document.getElementById("timer"));
                picture = document.createElement("img");
                picture.id = "state5img";
                picture.src = "pushup.gif";
                picture.style.height = "20em";
                picture.style.width = "30em";
                document.getElementById("state5content").style.textAlign = "center";
                document.getElementById("state5content").appendChild(picture);
                exitState(5);
                timer = setInterval(setTime, 1000);
            }
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            break;
        case 17:
            break;
        case 18:
            break;
        case 19:
            break;
    }
}

function exitToRandomExerciseIntro() {
	totalSeconds = 0;
	if(roundsFinished < gInfo.getNumOfRounds()) {
		roundsFinished++;
		document.getElementById("state4h1").remove();
		document.getElementById("state4img").remove();
		getRandomExercise();
	} else {
		if(!gInfo.getIsMultiplayer()) {
			finishSP();
			gInfo.setPlayerScore(0, gInfo.getPlayerScores[0] + document.getElementsByClassName("playerScoreInput").item(0).value);
		} else {
			finishMP();
			gInfo.setPlayerScore(0, gInfo.getPlayerScores[0] + document.getElementsByClassName("playerScoreInput").item(0).value);
			gInfo.setPlayerScore(1, gInfo.getPlayerScores[1] + document.getElementsByClassName("playerScoreInput").item(1).value);
			gInfo.setPlayerScore(2, gInfo.getPlayerScores[2] + document.getElementsByClassName("playerScoreInput").item(2).value);
			gInfo.setPlayerScore(3, gInfo.getPlayerScores[3] + document.getElementsByClassName("playerScoreInput").item(3).value);
		}
	}
}

function exitToState6() {
	if(!gInfo.getIsMultiplayer()) {
		document.getElementById("state6h1").innerHTML = "Type in your score";
		let input0 = document.createElement("input");
		input0.className = "playerScoreInput";
		input0.type = "number";
		input0.onchange = function () {setScore(0, this.value);};
		document.getElementById("state6in").insertBefore(input0, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(document.createElement("br"), document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(document.createElement("br"), document.getElementById("state6button"));
	} else {
		document.getElementById("state6h1").innerHTML = "Type in your scores";
		let input0 = document.createElement("input");
		let input1 = document.createElement("input");
		let input2 = document.createElement("input");
		let input3 = document.createElement("input");
		input0.className = "playerScoreInput";
		input1.className = "playerScoreInput";
		input2.className = "playerScoreInput";
		input3.className = "playerScoreInput";
		input0.type = "number";
		input1.type = "number";
		input2.type = "number";
		input3.type = "number";
		input0.setAttribute("onchange", function a () {setScore(0, this.value);});
		input1.setAttribute("onchange", function b () {setScore(1, this.value);});
		input2.setAttribute("onchange", function c () {setScore(2, this.value);});
		input3.setAttribute("onchange", function d () {setScore(3, this.value);});
		let pic0 = document.createElement("img");
		let pic1 = document.createElement("img");
		let pic2 = document.createElement("img");
		let pic3 = document.createElement("img");
		pic0.src = "bluehead.png";
		pic0.height = "100";
		pic0.width = "100";
		pic0.style.transform = "translateY(25%)";
		pic1.src = "redhead.png";
		pic1.height = "100";
		pic1.width = "100";
		pic1.style.transform = "translateY(25%)";
		pic2.src = "purplehead.png";
		pic2.height = "100";
		pic2.width = "100";
		pic2.style.transform = "translateY(25%)";
		pic3.src = "greenhead.png";
		pic3.height = "100";
		pic3.width = "100";
		pic3.style.transform = "translateY(25%)";
		document.getElementById("state6in").insertBefore(pic0, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(input0, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(pic1, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(input1, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(document.createElement("br"), document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(pic2, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(input2, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(pic3, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(input3, document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(document.createElement("br"), document.getElementById("state6button"));
		document.getElementById("state6in").insertBefore(document.createElement("br"), document.getElementById("state6button"));
	}
	exitState(6);
}


function finishSP() {
	exitState(7);
}

function finishMP() {
	let temp = 0;
	let pos = 0;
	for(let i = 0; i < gInfo._playerScores.length; ++i) {
		if(gInfo._playerScores[i] > temp) {
			temp = gInfo._playerScores[i];
			pos = i;
		}
	}
	let winnertext = document.createElement("h1");
	winnertext.innerHTML = "Blue wins!";
	document.getElementById("mpwinner").appendChild(winnertext);
	let winner = document.createElement("img");
	winner.src = ('0.png');
	winner.height = "600";
	winner.width = "400";
	document.getElementById("mpwinner").appendChild(winner);
	exitState(8);
}

function restartGame() {
	exitState(0);
	gInfo = new GameInfo();
	roundsFinished = 0;
}


// When the window loads it brings up the first card
window.onload = () => {enterState(0);}
