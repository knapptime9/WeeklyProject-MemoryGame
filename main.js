let tile_values = [];
let tile_ids = [];
let flippedCounter = 0;
let tiles_array =[
    {
			name: "BlueLink",
      img: "./Images/BlueLink.jpeg",
      // id: 1,
    },
    {
			name: "BlueLink",
      img: "./Images/BlueLink.jpeg",
      // id: 1,
    },
    {
      name: "boomerang",
      img: "./Images/boomerang.jpeg",
      // id: 2,
    },
    {
      name: "boomerang",
      img: "./Images/boomerang.jpeg",
      // id: 2,
    },
    {
  		name: "fairy",
      img: "./Images/fairy.jpeg",
      // id: 3,
    },
    {
  		name: "fairy",
      img: "./Images/fairy.jpeg",
      // id: 3,
    },
    {
      name: "GreenCrest",
      img: "./Images/GreenCrest.jpeg",
      // id: 4,
    },
    {
      name: "GreenCrest",
      img: "./Images/GreenCrest.jpeg",
      // id: 4,
    },
    {
      name: "greenLink",
      img: "./Images/greenLink.jpeg",
      // id: 5,
    },
    {
      name: "greenLink",
      img: "./Images/greenLink.jpeg",
      // id: 5,
    },
    {
      name: "heartContainer",
      img: "./Images/heartContainer.jpeg",
      // id: 6,
    },
    {
      name: "heartContainer",
      img: "./Images/heartContainer.jpeg",
      // id: 6,
    },
    {
      name: "HyruleCrest",
      img: "./Images/HyruleCrest.jpeg",
      // id: 7,
    },
    {
      name: "HyruleCrest",
      img: "./Images/HyruleCrest.jpeg",
      // id: 7,
    },
    {
      name: "MainTitle",
      img: "./Images/MainTitle.jpeg",
      // id: 8,
    },
    {
      name: "MainTitle",
      img: "./Images/MainTitle.jpeg",
      // id: 8,
    },
    {
      name: "MajoraMask",
      img: "./Images/MajoraMask.jpeg",
      // id: 9,
    },
    {
      name: "MajoraMask",
      img: "./Images/MajoraMask.jpeg",
      // id: 9,
    },
    {
      name: "masterSword",
      img: "./Images/masterSword.jpeg",
      // id: 10,
    },
    {
      name: "masterSword",
      img: "./Images/masterSword.jpeg",
      // id: 10,
    },
    {
      name: "ocarina",
      img: "./Images/ocarina.jpeg",
      // id: 11,
    },
    {
      name: "ocarina",
      img: "./Images/ocarina.jpeg",
      // id: 11,
    },
    {
      name: "shield",
      img: "./Images/shield.jpeg",
      // id: 12,
    },
    {
      name: "shield",
      img: "./Images/shield.jpeg",
      // id: 12,
    },
]
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
  flippedCounter = 0;
  let output = "";
  tiles_array.shuffle_tiles();
  for (let i=0; i < tiles_array.length; i++){
    output = output + '<div id="tile_'+i+'" onclick="flipTile(this, \''+tiles_array[i]+'\')"></div>';
  }
  document.getElementById('gameBoard').innerHTML = output;

}

// newGame();
