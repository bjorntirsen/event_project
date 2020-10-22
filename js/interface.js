class Interface {
  constructor() {
    this.eventList = new EventList();
    if (localStorage.getItem("data") == null) {
      this.initializeFiveEvents();
    }      
  }
  //Creates five "default" events
  initializeFiveEvents() {
    let event1 = new Event("Celine Dion", "210613", "Concert", "Friends Arena Stockholm", "pictures/celine.jpg");
    this.eventList.eventArray.push(event1);
    let event2 = new Event("Ozzy Ozbourne", "201205", "Concert", "Friends Arena Stockholm", "pictures/ozzy.jpg");
    this.eventList.eventArray.push(event2);
    let event3 = new Event("Lars Winnerbäck", "210709", "Concert", "Sofiero Helsingborg", "pictures/lars.jpg");
    this.eventList.eventArray.push(event3);
    let event4 = new Event("Spökvandring i Gamla Stan", "210613", "Arts & Theater", "Järntorget Stockholm", "pictures/ghost.jpg");
    this.eventList.eventArray.push(event4);
    let event5 = new Event("House of Comedy", "201020", "Arts & Theater", "Älghjärtat Stockholm", "pictures/comedy.jpg");
    this.eventList.eventArray.push(event5);
    console.log(this.eventList.eventArray);
    this.updateToLocalStorage();
  }

  updateToLocalStorage() {
    let dataStringForm = JSON.stringify(this.eventList.eventArray);
    localStorage.setItem("data", dataStringForm);
  }

  updateFromLocalStorage() {
    let dataObjectForm = JSON.parse(localStorage.getItem("data"));
    this.eventList.eventArray = dataObjectForm;
  }

  displayEventsOnEventList() {
    this.updateFromLocalStorage();
    let mainContent = document.getElementById("mainContainer");
    let div = document.createElement("div");
    div.innerHTML = ""
    div.setAttribute("id", "eventDiv");
    mainContent.appendChild(div);
    this.eventDiv(this.eventList.eventArray[0])
  }

  eventDiv(event){
    let div = document.getElementById("eventDiv")
    let eventDiv = document.createElement("div"); //img
    eventDiv.classList.add("eventDiv");
    let img = document.createElement("img");
    img.setAttribute("src", event.img);
    div.appendChild(img)

    let eventInfoDiv = document.createElement("div");
    eventInfoDiv.classList.add("eventDiv");
    let nameP = document.createElement("p");
    nameP.textContent = event.name
    eventInfoDiv.appendChild(nameP)
    div.appendChild(eventInfoDiv)

    let locationP = document.createElement("p");
    locationP.textContent = event.location
    eventInfoDiv.appendChild(locationP)

    let dateP = document.createElement("p");
    dateP.textContent = event.date
    eventInfoDiv.appendChild(dateP)

    let genreP = document.createElement("p");
    genreP.textContent = event.genre
    eventInfoDiv.appendChild(genreP)


  }

}

//Kolla i local-storage om det finns något object
