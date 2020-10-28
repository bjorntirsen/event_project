//Code to be executed once all the files are loaded into the browser
document.addEventListener("DOMContentLoaded", function(e){
    //Creates obj of class interface
    let my_interface = new Interface();
    //This only happens on the Event page
    if (document.URL.includes("events.html")) {
        my_interface.displayEventsOnEventList();
        my_interface.filterButtonEventListener();  
        my_interface.eventListenerTakeToEventDetails();
    }
    //Only on admin page
    if (document.URL.includes("admin.html")) {
        my_interface.displayEventsOnAdminPage();
        my_interface.cUButtonEventListener();
    }
    //This only happens on the Details page
    if (document.URL.includes("details.html")) {
		let gBBtn = document.getElementById("submitGuestbookBtn");
		gBBtn.addEventListener("click", function(e) {
            //This if statement is to avoid that empty entries are made to the gruestbook
			if (document.getElementById("guestBook").value.trim() != "") {
				my_interface.postToGuestbook();
			}
		})
    }
})

