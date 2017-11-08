$(document).ready(function(){

  $("#start").on("click", function() {
    var parent = $(".cardHolder");
    var card = parent.child();
    while (card.length) {
      parent.append(card.slice(Math.floor(Math.random() * card.length), 1)[0]);
    }
  });





});
