$(document).ready(function(){

  $("#start").on("click", function() {
    var parent = $(".cardHolder");
    var card = parent.children();
    while (card.length) {
      parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    };
	$("#startScreen").css("display", "none");
  });

  




});
