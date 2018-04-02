// function add_ingredients(){
//   document.getElementById('base').src="img/burrito.png";
// }

function next_ingredients(){
  for (var i=1; i<=4; i++){
    document.getElementById("i"+i).innerHTML = "new"+i;
  }
}

function new_burrito(){
    document.getElementById("burrito").innerHTML = "new";
}
