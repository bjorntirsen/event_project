class EventList {
  constructor() {
    this.eventArray = [];
    if (localStorage.getItem("data") == null) {
      this.initializeFiveEvents();
    }   
  }

  //Creates five "default" events
  initializeFiveEvents() {
    let event1 = new Event("Celine Dion", "210613", "Concert", "Friends Arena Stockholm", "pictures/celine.jpg");
    this.eventArray.push(event1);
    let event2 = new Event("Ozzy Ozbourne", "201205", "Concert", "Friends Arena Stockholm", "pictures/ozzy.jpg");
    this.eventArray.push(event2);
    let event3 = new Event("Lars Winnerbäck", "210709", "Concert", "Sofiero Helsingborg", "pictures/lars.jpg");
    this.eventArray.push(event3);
    let event4 = new Event("Spökvandring i Gamla Stan", "210613", "Arts & Theater", "Järntorget Stockholm", "pictures/ghost.jpg");
    this.eventArray.push(event4);
    let event5 = new Event("House of Comedy", "201020", "Arts & Theater", "Älghjärtat Stockholm", "pictures/comedy.jpg");
    this.eventArray.push(event5);
    console.log(this.eventArray);
    this.updateToLocalStorage();
  }

  
  updateToLocalStorage() {
    let dataStringForm = JSON.stringify(this.eventArray);
    localStorage.setItem("data", dataStringForm);
  }

  updateFromLocalStorage() {
    let dataObjectForm = JSON.parse(localStorage.getItem("data"));
    this.eventArray = dataObjectForm;
  }
}
