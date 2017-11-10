$(document).ready(function(){
  var totalClicks = 10;
  var clicks = 0;
  var cardOne;
  var cardTwo;
  var matches = 0;
  var tries = document.getElementById("totalClicks");

  $("#start").on("click", function() {
    var parent = $(".cardHolder");
    var card = parent.children();
    while (card.length) {
      parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    };
  $("#startScreen").slideUp(1000);
  });
   $(".back").on("click", function() {
      if (clicks === 1) {
          cardTwo = this;
          $(this).addClass("front");
          $(this).hide();
          $(this).removeClass("back");
          $(this).slideDown(500);
          clicks++;
          totalClicks--;
          tries.innerText="Turns left: " + totalClicks;
        setTimeout(function(){
          if (cardOne.innerHTML !== cardTwo.innerHTML)  {
            $(".front").addClass("back");
            $(".front").hide();
            $(".front").removeClass("front");
            $(".back").slideDown(500);
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
	  if(matches === 6 ) {
              $("#winScreen").css("display","inline-block");
              $("#winScreen").slideDown(1000); 
            	}
          return;
        } 
      }, 1000)
        } 
      if(totalClicks === 0){
      	$(".back").css("display","none");
      	$(".front").css("display","none");
      	$("#reset").css("display","none");
      	$("#loseScreen").css("display","inline-block");
      	$("#loseScreen").slideDown(1000); 
      	return;
      }
      if (clicks === 0) {
        clicks++;
        cardOne = this
        $(this).addClass("front");
        $(this).hide();
        $(this).removeClass("back");
        $(".front").slideDown(500);
       
      }    
  });
  
	$("#reset").on("click", function() {
		$(".cardHolder div").css("visibility", "visible");
		$(".front").addClass("back").removeClass("front");
		var parent = $(".cardHolder");
		var card = parent.children();
		while (card.length) {
		parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    		matches = 0;
		totalClicks = 10;
    		var scoreBoard = document.getElementById("scoreBoard");
    		scoreBoard.innerText="Score Board: " + matches;
		tries.innerText="Turns left: " + totalClicks;
		};
	});
	 $(".playAgain").on("click", function() {
    	var parent = $(".cardHolder");
   		var card = parent.children();
    matches = 0;
    totalClicks = 10; 
    		var scoreBoard = document.getElementById("scoreBoard");
   		scoreBoard.innerText="Score Board: " + matches;
    		cardOne;
    		cardTwo;
   		while (card.length) {
    		parent.append(card.splice(Math.floor(Math.random() * card.length), 1)[0]);
    		};
      $("#winScreen").slideUp(1000);
      $("#loseScreen").slideUp(1000);
  		$(".cardHolder div").css("visibility", "visible");
  		$(".front").addClass("back").removeClass("front");
 	 });
  
  	myAudio = new Audio('audio/thexfiles.mp3'); 
	myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
	}, false);
	myAudio.play();

});

