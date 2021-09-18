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
  var blocking = true;
  if (!myTest) {
    alert("A popup blocker was detected.");
  } else {
    blocking = false;
    myTest.close();
    alert("No popup blocker was detected.");
  }
  return blocking;
}

document.addEventListener("DOMContentLoaded", function() {
    if (detectPopupBlocker){
        openLinks();
    } else {
        alert("Please disable popup blocking for this domain."
    }
});
