
    let slideIndex = 0;
    
          function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");

          for (i = 0; i < slides.length; i++)
          {
          slides[i].style.display = "none";          //None
          }
            slideIndex++;
          if (slideIndex > slides.length) 
          {
            slideIndex = 1
          }    

          slides[slideIndex-1].style.display = "block";  //Block

          setTimeout(showSlides, 4000); // Change image every 2 seconds
        }
        