function toggleNav() {
    let nav = document.getElementById("nav-content");
    nav.classList.toggle("active");
}

window.onload = function() {
    $('#masonry').css("display","");
    $('#masonry').flexImages({rowHeight: 560});

    $(".slide-gallery").each(function() {
      showSlides(slideIndex, '#'+this.id);
    });
}

var slideIndex = 0;

function slideNext(n, section) {
  showSlides(slideIndex += n, section);
}

function currentSlide(n, section) {
  showSlides(slideIndex = n, section);
}

function showSlides(n, section) {
  let i;
  let slides = $(section + ' img');
  let dots = $(section + ' li');
  if (n > slides.length) {slideIndeslides = 0}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" highlight", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " highlight";
}
