
// Når brugeren scroller 300px ned af siden, skal farven på dato og lokation i margen ændres
window.onscroll = function() {scrollFunction()};

function addClass(){
  var element = document.getElementById("descriptor");
  element.classList.add("change-descriptor");
}
function removeClass(){
  var element = document.getElementById("descriptor");
  element.classList.remove("change-descriptor");
}

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 300) {
    addClass();
  } else {
    removeClass();
  }
}

// Når kortet klikkes, åbner en lightbox op:
function openImage(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}