//This class is mainly for handling what is displayed to the user
class Interface {
    constructor() {
		//We are sending a reference to this object on to the EventList class
		this.eventList = new EventList(this);
		//Temporary array to include the events the user wants to display
        this.displayebleEvents = []
    }

	//This method puts the data from local storage into the event array. Then it takes the objects in the event array and translates them to HTML divs and then displayes them on the Event page
    displayEventsOnEventList() {
        this.eventList.updateFromLocalStorage();
        for (let i = 0; i < this.eventList.eventArray.length; i++) {
			this.eventDiv(this.eventList.eventArray[i]);
		}

    }

	//This method takes an object from the event array and translates it to an HTML div and adds it to the DOM
    eventDiv(event) {
		//First we make a refence to the div which will contain all our event divs
        let div = document.getElementById("mainContainer");
        //Create new event div
		let eventDiv = document.createElement("div");
		//Give it a class
		eventDiv.classList.add("eventDiv");
		//We add the event div to the container
        div.appendChild(eventDiv);
        //Create img element, giving it the adress to the image of the object, then appending that to event div
        let img = document.createElement("img");
        img.setAttribute("src", event.img);
        eventDiv.appendChild(img)
        //We create another div that will contain all the text info 
        let eventInfoDiv = document.createElement("div");
        eventInfoDiv.classList.add("eventInfoDiv");
        //Create and add all p tags to text div
        let nameP = document.createElement("p");
        nameP.textContent = event.name;
        eventInfoDiv.appendChild(nameP);

        let locationP = document.createElement("p");
        locationP.textContent = event.location;
        eventInfoDiv.appendChild(locationP);

        let dateP = document.createElement("p");
        dateP.textContent = event.date;
        eventInfoDiv.appendChild(dateP);

        let genreP = document.createElement("p");
        genreP.textContent = event.genre;
        eventInfoDiv.appendChild(genreP);
		//Add the text div to the event div
        eventDiv.appendChild(eventInfoDiv);
    }

    //Add eventlistener to filter button
    filterButtonEventListener() {
		//We create a refence to main object so we can reach the object inside the eventlistener
        let self = this;
        let filterBtn = document.getElementById("filterBtn");
        filterBtn.addEventListener("click", function(e) {
			//Fist we add all the events from the eventlist to the displayebleEvents array
			self.displayebleEvents = self.eventList.eventArray;
			//Creates references to the two dropdown menus
            let genre = document.getElementById("genre");
			let year = document.getElementById("year");
			//Executes different methods depending on what the user selected in the dropdown menus
            if (genre.value == "concert") {
                self.filterConcert();
            } else if (genre.value == "theater") {
                self.filterTheater();
            }
            if (year.value == "2020") {
                self.filter2020();
            } else if (year.value == "2021") {
                self.filter2021();
            }
            //call sorting method here
            self.sortByDate();
			//Always end by calling this method which displays the filtered events
			//Here we should have a sort by date method
            self.displayFilteredEvents();
        })
    }

	//Filter methods to be used on the events
    filterConcert() {
        this.displayebleEvents = this.displayebleEvents.filter(element => element.genre == "Concert");
    }
    filterTheater() {
        this.displayebleEvents = this.displayebleEvents.filter(element => element.genre == "Arts & Theater");
    }
    filter2020() {
        this.displayebleEvents = this.displayebleEvents.filter(element => Number(element.date) < 209999);
    }
    filter2021() {
        this.displayebleEvents = this.displayebleEvents.filter(element => Number(element.date) > 209999);
	}
	
	//Method very similar to "displayEventsOnEventList", but uses the filtered event array instead of the full events array
    displayFilteredEvents() {
        document.getElementById("mainContainer").innerHTML = "";
        for (let i = 0; i < this.displayebleEvents.length; i++) {
            this.eventDiv(this.displayebleEvents[i], i)
        }
    }
    
    //Sorting method by date from olders to newest

    sortByDate() {
        this.displayebleEvents.sort((a, b) => a.date - b.date);

    }
	
	

    eventDetailsEventListner() {

    }
}