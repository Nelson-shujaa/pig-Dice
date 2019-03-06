

  //Business logic
  var total = 0;
  var totalscore = 0;
  var total1 = 0;
  var totalscore1 = 0;

  //User interface logic
  function start() {
    location.reload();
    // $(".intro").toggle(500);

  }
  function show() {
    $(".intro").toggle(500);
    $(".row").toggle(500);

  }
 function Try() {
   var player1 = 0;
   var player1 = Math.floor(Math.random()*6)+1;
   document.getElementById('p1').innerHTML = player1;

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
$("#hold").toggle(1000);
$("#hold").toggle(1000);
$("#p2").show();
$("#h2").show();
$("#p1").hide();
$("#h1").hide();

total=0;
$(".score").text(total);
if (totalscore>=100) {
  $(".row").hide();
  $(".winner").toggle(2000);
  $(".winner").toggle(3000);
  $("#rs").toggle(5000);

}
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
  $("#next").toggle(1000);
  $("#next").toggle(1000);
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
  $(".score2").text(totalscore1);
  $("#p1").show()
  $("#h1").show();
  $("#p2").hide();
  $("#h2").hide();
  $("#hold").toggle(1000);
  $("#hold").toggle(1000);

    total1=0;
  $(".score1").text(total1);
  if (totalscore1>=100) {
    $(".row").hide();
    $(".win2").toggle(2000);
    $(".win2").toggle(3000);
    $("#rs").toggle(5000);
  }

}
