  function dice (Name,Player) {
      Name = name;
      Player = player;

  }
// var  player1 = [0];
// var player2 = [0];
// var game = player1
 function Try() {
   var play = [];
   var player1 = Math.floor(Math.random()*6)+1;
   document.getElementById('p1').innerHTML = player1;
    play.push(player1);
    if (play==1) {
      alert("OOps stop");


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
  if (play==1);{
  alert("OOps stop");
}
}
