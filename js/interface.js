class Interface {
  constructor() {
    this.eventList = new EventList(this);   
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
        let genre = document.getElementById("genre");
        if (genre.value == "all") {
            self.displayAll();
        }
        else if (genre.value == "concert") {
            self.displayConcert();
        }
        else if (genre.value == "theater") {
            self.displayTheater();
        }
    })
  }
  displayAll() {
    document.getElementById("mainContainer").innerHTML = "";
    //kod för att sortera arrayen på datum
    for (let i = 0; i < this.eventList.eventArray.length; i++) {
        this.eventDiv(this.eventList.eventArray[i])
    }
  }
  displayConcert() {
    document.getElementById("mainContainer").innerHTML = "";
    let filteredArray = this.eventList.eventArray.filter(element => element.genre == "Concert");
    for (let i = 0; i < filteredArray.length; i++) {
        this.eventDiv(filteredArray[i])
    }
  }
  displayTheater() {
    document.getElementById("mainContainer").innerHTML = "";
    let filteredArray = this.eventList.eventArray.filter(element => element.genre == "Arts & Theater");
    for (let i = 0; i < filteredArray.length; i++) {
        this.eventDiv(filteredArray[i])
    }
  }
}
