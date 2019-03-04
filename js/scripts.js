  function dice (Name,Player) {
      Name = name;
      Player = player;

  }
// var  player1 = [0];
// var player2 = [0];
// var game = player1
 function Try() {
   //preventDefault();
   var total = [];
   var play = [];
   var player1 = Math.floor(Math.random()*6)+1;
   document.getElementById('p1').innerHTML = player1;
    play.push(player1);
    total.push(player1);
    $("#p2").hide();
    $("#h2").hide();
    var sum = total
    totals=total.reduce(function(total,play){
      return total+play;
    },0);



    if (play==1) {
      $("#p2").show();
      $("#h2").show();
      $("#p1").hide();
      $("#h1").hide();
      $(".col-md-4").toggle(1500);
      $(".col-md-4").toggle(1500);
    }
    else {


    $(".score").append(sum);
  $(".first-roll1").text(play);
 }
}


// $("#p1").submit(function(){
//   event.preventDefault();
//   var player1 = Math.floor(Math.random()*6);
//   document.getElementById('p1').innerHTML = player1
// });

function Try2(){

  var play = [];
  var player2 = Math.floor(Math.random()*6)+1;
  document.getElementById('p2').innerHTML = player2;
  play.push(player2);
  if (play==1){
  $("#p1").show();
  $("#h1").show();
  $("#p2").hide();
  $("#h2").hide();
  $(".col-md-4").toggle(1500);
  $(".col-md-4").toggle(1500);
  // $("div#next").slideDown();
}
  $(".first-roll").text(play);
}
