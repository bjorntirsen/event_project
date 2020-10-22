document.addEventListener("DOMContentLoaded", function(e){
    let my_interface = new Interface();
    if (document.URL.includes("events.html")) {
        console.log("hej");
        my_interface.displayEventsOnEventList();
    }
})

