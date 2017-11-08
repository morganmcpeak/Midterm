$(document).ready(function(){
	
	var clicks = 0;
	var cardOne;
	var cardTwo;

  $("#start").on("click", function() {
    var parent = $(".cardHolder");
    var card = parent.children();
    while (card.length) {
      parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    };
	$("#startScreen").css("display", "none");
  });

  $(".back").on("click", function() {
      clicks++;
	  cardOne = this.innerHTML;
	  console.log(cardOne); 	
		$(".back").on("click", function() {
			if (clicks === 1) {
			cardTwo = this.innerHTML;
            console.log(cardTwo);
            clicks++
        }
        
    });
  });




});
