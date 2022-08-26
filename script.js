console.log(navigator.userAgent);
if (confirm("I would like to hear your feedback") == true)
{
	location.href("https://docs.google.com/forms/d/e/1FAIpQLSeA-6ko6ivasc6LnMX_RBvBSql2oIFOsXe37UQ4bu1o4WvC8A/viewform?usp=sf_link");
}


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


