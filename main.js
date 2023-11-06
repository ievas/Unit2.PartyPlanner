//User story:
//A user enters the website and finds a list of the names, dates, times, locations, and descriptions 
// of all the parties that are happening.
// Next to each party in the list is a delete button. 
// The user clicks the delete button for one of the parties. That party is then removed from the list.
// There is also a form that allows the user to enter information about a new party that they want to schedule. 
// After filling out the form and submitting it, the user observes their party added to the list of parties.

//REQUIREMENTS:

//Fetch is used correctly to GET party data from the API.
//Fetch is used correctly to POST a new party to the API.
//Fetch is used correctly to DELETE a party from the API.
//The app contains a list of the names, dates, times, locations, and descriptions of all parties.
//Each party in the list has a delete button which removes the party when clicked.
//The app contains a form that allows a user to enter information about a party and add it to the list.
//The DOM is dynamically rendered according to data stored in state.
//The data stored in state is updated to stay in sync with the API.


///events endpoint
//event's data: id, name, description, date, location
//GET BASE_URL/events/id returns object

const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-acc-et-web-pt-a/events`;

//state with data from API

let state = {
    events: [],
}



async function getEvents(){
    try {
        let response = await fetch(API_URL);
        let obj = await response.json();
        state.events = obj.data;
        console.log(state.events)
    } catch (err){
        alert(err.message);
    }
}

getEvents();


// async function renderEvents(){

// }

//References
let eventList = document.getElementById("event-list")
let addEventForm = document.querySelector("form");

//Listeners
//event listener for delete button
//event listener for form submit
addEventForm.addEventListener("submit", addEvent);

function addEvent(){

}









