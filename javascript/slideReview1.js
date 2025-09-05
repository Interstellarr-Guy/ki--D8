
            let review1Index=0;
            
                function showSlidesR1(){
                let i;
                let Sli =document.getElementsByClassName("slides");

                for(i = 0; i < Sli.length; i++){
                    Sli[i].style.display= "none";
                }

                    review1Index++;
                if(review1Index > Sli.length)
                {
                    review1Index=1;
                }
                    Sli[review1Index-1].style.display="block";
                setTimeout(showSlidesR1, 5000);
             }

