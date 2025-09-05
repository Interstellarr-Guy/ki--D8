
            let review2Index=0;
            
                function showSlidesR2(){
                let i;
                let SliR =document.getElementsByClassName("rev2");

                for(i = 0; i < SliR.length; i++){
                    SliR[i].style.display= "none";
                }

                    review2Index++;
                if(review2Index > SliR.length)
                {
                    review2Index=1;
                }
                    SliR[review2Index-1].style.display="block";
                setTimeout(showSlidesR2, 4000);
             }

