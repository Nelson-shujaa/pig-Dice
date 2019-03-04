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

    if (play==1) {
      $("#p2").show();
      $("#h2").show();
      $("#p1").hide();
      $("#h1").hide();
      $("div#next").toggle();

    }
    $(".score").append(total);
  $(".first-roll1").text(play);
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
  // $("div#next").slideDown();
}
  $(".first-roll").text(play);
}
