var slideIndex = 1;
showSlides(slideIndex);

/*n in the code is a parameter*/


/*Plusslides is the code for the arrow buttons */

function plusSlides(n) {


showSlides(slideIndex += n);
  
}


function showSlides(n) {

  /*Getelementbyclassname calls for the class know as slide in this case*/
var i;
var slides = document.getElementsByClassName("slides")

/*This code controls where the slideshow starts, ends and starts over*/
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}  /*By changing the numbers I can change were the slideshow starts and ends*/
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none"; /*This slide makes it so that the arrow buttons doesnt create new instances but instead just changes the picture, 
  without this code it just becomes an endless mess of copies*/
}


slides[slideIndex-1].style.display = "block"; 

}




