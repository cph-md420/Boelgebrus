
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function addClass(){
    var element = document.getElementById("descriptor");
    element.classList.add("test");
}
function removeClass(){
    var element = document.getElementById("descriptor");
    element.classList.remove("test");
}

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 50) {
    addClass();
  } else {
    removeClass();
  }
}
