class Event {
  constructor(eventName = "", date = "", genre = "", location = "", img = "", time = "", price = "", info = "") {
    this.name = eventName;
    this.date = date;
    this.genre = genre;
    this.location = location;
    this.img = img;
    this.time = time;
    this.price = price;
    this.info = info;
    console.log('Created event: ' + this.name);
    console.log(this);
  }
}
