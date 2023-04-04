document.addEventListener("DOMContentLoaded", function() {
   
	var amount = 10;
	var body = document.querySelector('body');
	var i = 0;
	
	while (i < amount) {
	  var node = document.createElement("i");
	  var posX = Math.floor(Math.random() * window.innerWidth);
	  var posY = Math.floor(Math.random() * window.innerHeight);
	  var rotation = Math.random() * 1000;
	  // var delay = Math.random() * 5;
	  var delay = getRandom(1, 10);
	  var scale = Math.random() * 0.1;
	  node.style.left = posX+'px';
	  node.style.top = posY+'px';
	  node.style.transform = 'rotate('+rotation+'deg) scale('+scale+')';
	  node.style.animationDelay = delay+'s';
	  body.appendChild(node);
	  i++;
	}
  });
  
  function getRandom(min, max) {
	return Math.random() * (max - min) + min;
  }