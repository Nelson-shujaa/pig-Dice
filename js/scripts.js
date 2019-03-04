  function dice (Name,Player) {
      Name = name;
      Player = player;

  }
// var  player1 = [0];
// var player2 = [0];
// var game = player1
var total = 0;
var totalscore = 0;

 function Try() {
   //preventDefault();
   //var total = [];

   var player1 = Math.floor(Math.random()*6)+1;
   document.getElementById('p1').innerHTML = player1;
    //play.push(player1);
    //total.push(player1);
    //alert(total);
    $("#p2").hide();
    $("#h2").hide();
    total+=player1;



    if (player1==1) {
      $("#p2").show();
      $("#h2").show();
      $("#p1").hide();
      $("#h1").hide();
      $(".col-md-4").toggle(1500);
      $(".col-md-4").toggle(1500);
    }
    else {


    $(".score").text(total);
  $(".first-roll1").text(player1);
 }
 return false;
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
  $(".col-md-4").toggle(1000);
  $(".col-md-4").toggle(1000);
  // $("div#next").slideDown();
}
  $(".first-roll").text(play);
}
