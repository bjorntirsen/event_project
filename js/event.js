//This class is like a blueprint for event objects.
class Event {
    constructor(eventName, date, genre, location, img, time, price, info) {
        this.name = eventName;
        this.date = date;
        this.genre = genre;
        this.location = location;
        this.img = img;
        this.time = time;
        this.price = price;
        this.info = info;
    }
}