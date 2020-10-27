//Code to be executed once all the files are loaded into the browser
document.addEventListener("DOMContentLoaded", function(e){
    //Creates obj of class interface
    let my_interface = new Interface();
    //This only happens on the Event page
    if (document.URL.includes("events.html")) {
        my_interface.displayEventsOnEventList();
        my_interface.filterButtonEventListener();
        
    }
    
    if (document.URL.includes("admin.html")) {
        my_interface.displayEventsOnAdminPage();
        my_interface.cUButtonEventListener();
    }
})

