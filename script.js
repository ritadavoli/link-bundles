function openLinks(){
    links = document.querySelectorAll(".links a");
    for (i=0; i < links.length; i++){
        simulateClick(links[i]);
    }
}

function simulateClick(elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	evt.shiftKey = true;
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
}

function detectPopupBlocker() {
  var myTest = window.open("about:blank","","directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  var blocking;
    
  if (!myTest) {
    blocking = true;  
  } else {
    blocking = false;
    myTest.close();
  }
  return blocking;
}

document.addEventListener("DOMContentLoaded", function() {
    if (!detectPopupBlocker()){
        openLinks();
    } else {
        document.querySelector(".blocking").classList.add("show");
    }
});
