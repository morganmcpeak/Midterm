$(document).ready(function(){
  
  var clicks = 0;
  var cardOne;
  var cardTwo;
  var matches = 0;

  $("#start").on("click", function() {
    var parent = $(".cardHolder");
    var card = parent.children();
    while (card.length) {
      parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    };
  $("#startScreen").css("display", "none");
  });
   $(".back").on("click", function() {
      if (clicks === 1) {
            cardTwo = this.innerHTML;
			$(this).addClass("front");
			$(this).hide();
			$(this).removeClass("back");
			$(".front").slideDown(500);
            clicks++; 
        setTimeout(function(){
          if (cardOne !== cardTwo){
		   $(".front").addClass("back");
		   $(".front").hide();
		   $(".front").removeClass("front");
		   $(".back").slideDown(300);
            clicks = 0;
            return;
          }
           }, 1000)
        setTimeout(function(){
          if(cardOne.innerHTML === cardTwo.innerHTML) {
	  matches++;
          var scoreBoard = document.getElementById("scoreBoard");
          scoreBoard.innerText="Score Board: " + matches;
          $(".front").css("visibility","hidden");
          clicks = 0;
          return;
        } 
      }, 1000)
        
        } 
      if (clicks === 0) {
        clicks++;
        cardOne = this.innerHTML
		
		$(this).addClass("front");
		$(this).hide();
		$(this).removeClass("back");
		$(".front").slideDown(500);
        console.log(cardOne); 
      }    
  });

});
