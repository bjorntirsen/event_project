class Interface {
  constructor() {
    this.eventList = new EventList(this);
    this.displayebleEvents = []
  }

  displayEventsOnEventList() {
    this.eventList.updateFromLocalStorage();
    for (let i = 0; i < this.eventList.eventArray.length; i++) {
      this.eventDiv(this.eventList.eventArray[i])
    }
  }

  eventDiv(event){
    let div = document.getElementById("mainContainer");
    //Create event div
    let eventDiv = document.createElement("div"); //img
    eventDiv.classList.add("eventDiv");
    div.appendChild(eventDiv);
    //Create image and insert to div
    let img = document.createElement("img");
    img.setAttribute("src", event.img);
    eventDiv.appendChild(img)
    //Create text div
    let eventInfoDiv = document.createElement("div");
    eventInfoDiv.classList.add("eventInfoDiv");    
    //Create and add all p tags to eventInfoDiv
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

    eventDiv.appendChild(eventInfoDiv);
  }

  //Add eventlistener to filter button
  filterButtonEventListener() {
    let self = this;
    let filterBtn = document.getElementById("filterBtn");
    filterBtn.addEventListener("click", function(e) {
        self.displayebleEvents = self.eventList.eventArray;
        let genre = document.getElementById("genre");
        let year = document.getElementById("year");
        if (genre.value == "concert") {
            self.filterConcert();
        }
        else if (genre.value == "theater") {
            self.filterTheater();
        }
        if (year.value == "2020") {
            self.filter2020();
        }
        else if (year.value == "2021") {
            self.filter2021();
        }
        self.displayFilteredEvents();
    })
  }
  
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
  displayFilteredEvents() {
    document.getElementById("mainContainer").innerHTML = "";
    //kod för att sortera arrayen på datum
    for (let i = 0; i < this.displayebleEvents.length; i++) {
        this.eventDiv(this.displayebleEvents[i])
    }
  }
}
