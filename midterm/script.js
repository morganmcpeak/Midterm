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
            console.log(cardTwo); 
            $(this).addClass("front");
            clicks++; 
        if (cardOne !== cardTwo){
            clicks = 0;
            console.log("yo no good");
            return;
          }
        if(cardOne.innerHTML === cardTwo.innerHTML) {
        //clicks = 0;
        console.log("hello");
        return;
        } 
        } 
      if (clicks === 0) {
        clicks++;
        cardOne = this.innerHTML;
        $(this).addClass("front");
        console.log(cardOne); 
      }
       
  });





});
