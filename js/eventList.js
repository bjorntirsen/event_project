//This class handles all our currently existing events
class EventList {
  constructor() {
    this.eventArray = [];
    //Check if there is any data with key "data" in local storage. If there is no data it will execute the initializeFiveEvents method
    if (localStorage.getItem("data") == null) {
      this.initializeFiveEvents();
    }   
  }

  //Creates five "default" events
  initializeFiveEvents() {
    let event1 = new Event("Celine Dion", "210613", "Concert", "Friends Arena Stockholm", "pictures/celine.jpg", "19:20", "600kr", "Vocal powerhouse Celine Dion is one of the most immediately recognized, widely respected and successful performers in pop music history. She won numerous awards by the age of 18, dominated the pop charts in 1990s and has sold almost 250 million albums during her over 35-year career. She has earned five Grammy Awards, two Academy Awards, seven American Music Awards, 20 Juno Awards (Canada) and an astonishing 40 Félix Awards (Quebec). She remains one of the most sought-after recording artists, receiving the Diamond award at the 2004 World Music Awards recognizing her status as the best-selling female artist of all time. In 2016 the Billboard Music Awards presented her with the lifetime achievement Icon Award.");
    this.eventArray.push(event1);
    let event2 = new Event("Ozzy Ozbourne", "201205", "Concert", "Friends Arena Stockholm", "pictures/ozzy.jpg", "19:00", "1000kr", "John Michael 'Ozzy' Osbourne (born 3 December 1948) is an English singer, songwriter, and television personality. He rose to prominence during the 1970s as the lead vocalist of the heavy metal band Black Sabbath, during which period he adopted the nickname 'Prince of Darkness'.");
    this.eventArray.push(event2);
    let event3 = new Event("Lars Winnerbäck", "210709", "Concert", "Sofiero Helsingborg", "pictures/lars.jpg", "19:00", "595kr", "Lars Mattias Winnerbäck (born 19 October 1975 in Stockholm) is a Swedish singer and songwriter. He was born in Stockholm but spent his childhood in Vidingsjö, Linköping, where he attended Katedralskolan. He moved back to Stockholm in 1996, the same year he released his first album, Dans med svåra steg. He is now one of Sweden's most popular artists.");
    this.eventArray.push(event3);
    let event4 = new Event("Spökvandring i Gamla Stan", "210613", "Arts & Theater", "Järntorget Stockholm", "pictures/ghost.jpg", "18:30", "The idea of the Stockholm Ghost Walk company was born when two friends were travelling together overseas. The more they learned about new places, the more they realised that they knew very little about their own home, culture and it’s beginnings.Delving deep into historical books and texts, we very quickly began to realise that there was more to our little town than meets the eye”. “We began telling these stories to our friends and they became just as fascinated as we were”.");
    this.eventArray.push(event4);
    let event5 = new Event("House of Comedy", "201020", "Arts & Theater", "Älghjärtat Stockholm", "pictures/comedy.jpg", "20:00", "120kr", "Vi är stolta över att meddela att Stockholm Comedy Club från september kommer ha sitt hem på First Hotel Norrtull på S:t Eriksgatan 119. Utvalda fredagar och lördagar i höst bjuds det på högklassig standupunderhållning där Sveriges humorelit delar scen med de mest spännande nya namnen. Besökarn får en möjlighet att kombinera kvällens show med en välkomponerad standupmeny.-Det här är den partner vi har letat efter. Nu kan vi åter igen börja uppvakta företagskunder, säger House of Comedy Nordic VD Magdalena Bibik-Westerlund.");
    this.eventArray.push(event5);
    console.log(this.eventArray);
    this.updateToLocalStorage();
  }

  //This method translates the event array into JSON and then saves it to Local Storage
  updateToLocalStorage() {
    let dataStringForm = JSON.stringify(this.eventArray);
    localStorage.setItem("data", dataStringForm);
  }

  //This method takes the data from local storage and translates it from JSON into an array of event objects and then saves that array to the event array
  updateFromLocalStorage() {
    let dataObjectForm = JSON.parse(localStorage.getItem("data"));
    this.eventArray = dataObjectForm;
  }

	deleteEvent(event) {
    this.eventArray.splice(this.eventArray.indexOf(event), 1);
    this.updateToLocalStorage();
	}
}
