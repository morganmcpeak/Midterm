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
      if (clicks === 1) {
            cardTwo = this.innerHTML;
            $(this).addClass("front");
            $(this).removeClass("back");
            clicks++; 
        if (cardOne !== cardTwo){
           $(".front").addClass("back").removeClass("front");
            clicks = 0;
            return;
          }
        if(cardOne.innerHTML === cardTwo.innerHTML) {
        $(".front").css("visibility","hidden");
        clicks = 0;
        return;
        } 
        } 
      if (clicks === 0) {
        clicks++;
        cardOne = this.innerHTML;
        $(this).addClass("front");
        $(this).removeClass("back");
      }    
  });






});
