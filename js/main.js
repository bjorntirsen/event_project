document.addEventListener("DOMContentLoaded", function(e){
    let my_interface = new Interface();
    if (document.URL.includes("events.html")) {
        my_interface.displayEventsOnEventList();
        my_interface.filterButtonEventListener();
    }
})

