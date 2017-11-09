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
        setTimeout(function(){
          if (cardOne.innerHTML !== cardTwo.innerHTML)  {
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
		};
	});
  
  	myAudio = new Audio('thexfiles.mp3'); 
	myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
	}, false);
	myAudio.play();

});
