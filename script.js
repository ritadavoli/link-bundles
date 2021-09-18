function openLinks(){
    links = document.querySelectorAll("a");
    for (i=0; i < links.length; i++){
        openLink(links[i].href, i);
    }
}

function openLink(url, i){
    window.open(url, "_blank"); // the about:blank is to please Chrome, and _blank to please Firefox
}

document.addEventListener("DOMContentLoaded", function() {
    openLinks();
});
