// CAROUSEL
$(document).ready(function() { // service in module ng
  $("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget); // variable cible
    var idx = $e.index(); // variable index
    var itemsPerSlide = 3; // variable nombre d'items par slide
    var totalItems = $(".carousel-item").length; //  variable longueur totalItems

// condition if for, if else
    if (idx >= totalItems - (itemsPerSlide - 1)) { // affiche d'un item en vue
      var it = itemsPerSlide - (totalItems - idx); // valeur par soustraction de la variable it
      for (var i = 0; i < it; i++) {  // incrémentation
        // append slides to end
        if (e.direction == "left") { // slide des items strictement à droite
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else { // sinon afficher tout les items
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    };
  });
});
// CAROUSEL
