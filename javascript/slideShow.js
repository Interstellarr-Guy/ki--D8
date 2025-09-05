
            let slideIndex=0;
            
                function showSlides(){
                let i;
                let Sli =document.getElementsByClassName("slides");

                for(i = 0; i < Sli.length; i++){
                    Sli[i].style.display= "none";
                }

                    slideIndex++;
                if(slideIndex > Sli.length)
                {
                    slideIndex=1;
                }
                    Sli[slideIndex-1].style.display="block";
                setTimeout(showSlides, 3000);
             }

