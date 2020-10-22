class Event {
  constructor(eventName = "", date = "", genre = "", location = "", img = "") {
    this.name = eventName;
    this.date = date;
    this.genre = genre;
    this.location = location;
    this.img = img;
    console.log('Created event: ' + this.name);
    console.log(this);
  }
}
