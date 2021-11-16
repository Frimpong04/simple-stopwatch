let secondCount = 0 ;//variable to store the counting of the seconds

//global variable to store the interval when it is active
let stopWatch;

//store a reference to the paragraph in a variable
const displayPara = document.querySelector('.clock');

//function to display the current hours, minutes and seconds, and to display the count
function displayCount() {

    //calculate the hours, minutes and seconds
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor((secondCount % 3600)/60);
    let seconds = Math.floor(secondCount % 60);


//display a leading zero i fht evalues are less than 10
let displayHours = (hours < 10) ? '0' + hours : hours;
let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

// write the current stopwatch display time into the display paragraph
displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

//increase the second counter by one
secondCount++;
}

//store references to the buttons in the constants
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

//when the start button is clicked, start running displayCount once per second
startBtn.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    startBtn.disable = true;
});

//when the stop button is clicked, clear the interval to stop the count
stopBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
});

//when the rest button is clicked, set the counter back to zero, then immediately update the display
resetBtn.addEventListener('click', () => {
    clearInterval(stopWatch);
    startBtn.disabled = false;
    secondCount = 0;
    displayCount();
});

displayCount();