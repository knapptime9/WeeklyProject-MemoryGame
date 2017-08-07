let tile_values = [];
let tile_ids = [];
let flippedCounter = 0; //tracks # of flipped tiles for endgame conditional
let tiles_array = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K"];


Array.prototype.shuffle_tiles = function(){
  let i=this.length, j, temp;
  while (--i > 0){
    j=Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j]=this[i];
    this[i]=temp;
  }
}

function newGame(){
  flippedCounter = 0;  //reset endgame counter to 0
  let output = "";     // define variable that   will contain tile data AFTER shuffle
  tiles_array.shuffle_tiles(); //run shuffle function on initial tile array
  for (let i=0; i < tiles_array.length; i++){
    output = output + '<div id="tile_'+i+'" onclick="flipTile(this, \''+tiles_array[i]+'\')"></div>';
  }  //runs shuffle tile function and creates new sub-div with unique id and assigned onclick property.
  document.getElementById('gameBoard').innerHTML = output;   //displays the generated output to browswer window

}

function flipTile(tile, value){
  //initial check to see if (1st tile is hidden and less than 2 tiles flipped.)
  if (tile.innerHTML == "" && tile_values.length < 2){
  tile.style.background = "#FFF";
  tile.innerHTML= value;
  if (tile_values.length ==0 ){ // conditional = 0 tiles flipped
      tile_values.push(value);
      tile_ids.push(tile.id);
    }
  else if(tile_values.length == 1){ //conditional = 1 tile flipped
    tile_values.push(value);
    tile_ids.push(tile.id);
    if (tile_values[0]==tile_values[1]){ //check if two flipped tiles match.  ie IF tile_values ARE equal THEN TRUE
    flippedCounter = flippedCounter + 2 //increase  endgame conditional flipped counter by 2
    tile_values = [];
    tile_ids = [];  //clear tile values and ids
    }
    if (flippedCounter == tiles_array.length){  //CHECK IF ENDGAME CONDITIONAL IS TRUE
      alert( "YOU WIN -- CLICK TO RESTART");
      document.getElementById("gameBoard").innerHTML = "";
      newGame();

    }
  }

}
  else { //2 cards flipped and Dont Match
    function resetTile(){
       let tile1 = document.getElementById(tile_ids[0]);
       let tile2 = document.getElementById(tile_ids[1]);
       tile1.style.background =  'url("Images/flippedBackground.jpeg")';
       tile1.innerHTML="";
       tile2.style.background = 'url("Images/flippedBackground.jpeg")';
       tile2.innerHTML = "";

       tile_values=[];
       tile_ids=[];

    }
    setTimeout(resetTile, 700);
  }


}

// newGame();
