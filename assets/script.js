//Module instructions: 
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



//current date
var currentDateEl = document.getElementById("currentDate");
var currentDate = new Date();
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    };

    currentDateEl.textContent = currentDate.toLocaleDateString('en-US', options);

function createTimeLogs() {
    var plannerDiv = document.getElementById('planner');

    for (var hour = 9; hour <= 17; hour++) {
        var timeLog = document.createElement('div')
        timeLog.classList.add('time-log');

        //make sure hour is in a good format
        var displayTime = (hour % 12 === 0) ? 12: hour % 12;
        var morn_aft = (hour < 12) ? 'am' : 'pm';

        //timeLog needs text
        var timeLogText = document.createTextNode(displayTime + ' ' + morn_aft);

        //timeLog text + time
        timeLog.appendChild(timeLogText);

        //user var to enter text
        var userText = document.createElement('input');
        userText.setAttribute('type','text');
        userText.setAttribute('placeholder',' ');

        var img = document.createElement('img');
        img.setAttribute('src','assets/images/save.png')
        img.setAttribute('alt', 'save-image');

        //entering text from user
        timeLog.appendChild(userText);

        //time log to planner div
        plannerDiv.appendChild(timeLog);

        }
}

//loading
window.onload = createTimeLogs