function openLinks(){
    links = document.querySelectorAll("a");
    for (i=0; i < links.length; i++){
        openLink(links[i].href, i);
    }
}

function openLink(url, i){
    window.open(url, "_blank"); // the about:blank is to please Chrome, and _blank to please Firefox
    self.focus();
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
    if (detectPopupBlocker()){
        openLinks();
    } else {
        document.querySelector(".blocking").classList.add("show");
    }
});
