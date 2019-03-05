  function dice (Name,Player) {
      Name = name;
      Player = player;

  }
  var total = 0;
  var totalscore = 0;
  var total1 = 0;
  var totalscore1 = 0;
 function Try() {
   var player1 = 0;
   var player1 = Math.floor(Math.random()*6)+1;
   document.getElementById('p1').innerHTML = player1;
    //play.push(player1);
    //total.push(player1);
    //alert(total);
    $("#p2").hide();
    $("#h2").hide();
    if (player1==1) {
      total= 0;
      $(".score").text(total);
      $("#p2").show();
      $("#h2").show();
      $("#p1").hide();
      $("#h1").hide();
      $("#next").toggle(1500);
      $("#next").toggle(1500);
       player1=0;
    }
    else {

     total+=player1;
    $(".score").text(total);
  $(".first-roll1").text(player1);
 }
}

function hold() {
totalscore+=total
$(".scorei").text(totalscore);
$("#hold").toggle(1500);
$("#hold").toggle(1500);
$("#p2").show();
$("#h2").show();
$("#p1").hide();
$("#h1").hide();
// if (totalscore==100){
//   $(".win1").toggle();
//   $(".win1").toggle();
total=0;
$(".score").text(total);
}


function Try2(){
  var player2 = Math.floor(Math.random()*6)+1;
  document.getElementById('p2').innerHTML = player2;

  if (player2==1){
    total1=0;
  $(".score1").text(total1);
  $("#p1").show()
  $("#h1").show();
  $("#p2").hide();
  $("#h2").hide();
  $("#next").toggle(1500);
  $("#next").toggle(1500);
  player2=0;

}
else {
  total1+=player2;
  $(".score1").text(total1);
  $(".first-roll2").text(player2);
}
}

function hold2(){
  totalscore1+=total1;
  //(".score1").text(total);
  $(".score2").text(totalscore1);
  $("#p1").show()
  $("#h1").show();
  $("#p2").hide();
  $("#h2").hide();
  $("#hold").toggle(1500);
  $("#hold").toggle(1500);
  // if (totalscore==100){
  //   $("winner.win2").toggle();
  //   $(".win2").toggle();
  // }
    total1=0;
  $(".score1").text(totalscore1);
}
