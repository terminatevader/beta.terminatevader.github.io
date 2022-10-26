console.log(navigator.userAgent);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

    window.screen.orientation.lock("portrait")

}
//window.location.replace("https://www.terminatevader.com/");
  if (typeof(Storage) !== "undefined") {
    if (localStorage.visitcount) {
      localStorage.visitcount = Number(localStorage.visitcount)+1;
    } 
else {
      localStorage.visitcount = 1;
    }
  } 
 
const topnav = document.getElementById("topnav");
topnav.textContent = "TermiNateVader";

window.addEventListener('load', function(){
 
    var touchsurface = document.getElementById('touchsurface'),
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe){
        if (isrightswipe){
            plusDivs(-1)
	}
    }
 
    touchsurface.addEventListener('touchstart', function(e){
        touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false)
 
}, false) // end window.onload
			
	
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        plusDivs(-1)
    }
    else if(event.keyCode == 39) {
        plusDivs(1)
    }
	else if(event.keyCode == 36){
		location.href = "https://www.terminatevader.com/";
	}
	
	
	




});



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
	
}


