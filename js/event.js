class Event {
    constructor(eventName) {
        this.name = eventName;
        this.date = null;
        this.genre = null;
        this.location = null;
        console.log("Created event: " + this.name);
    }
}