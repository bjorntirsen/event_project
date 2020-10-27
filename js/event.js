//This class is like a blueprint for event objects.
class Event {
  constructor(eventName = "No name set", date = "No date set", genre = "No genre set", location = "No location set", img = "pictures/default.jpg", time = "No time set", price = "No price set", info = "No info added") {
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
