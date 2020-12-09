
ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=us&page=1", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    
    var titlesElt = document.getElementById("film");
    
        // Ajout du titre et du contenu de chaque article
        for(var i=0; i<20;i++){
            var title= JSON.parse(reponse);
    var data=title['results'];
    console.log(title);
           var contenuElt = document.createElement("div");
           contenuElt.classList="col-3 col-md-3 col-lg-3";
           
           var img=document.createElement("img");
           
        
            img.src = "https://image.tmdb.org/t/p/w500"+data[i].poster_path+"";       
            
            var titreElt=document.createElement("p");
            titreElt.textContent=data[i].title;
            
            titreElt.style="color:white;padding-bottom:20px;margin-top:0;margin-bottom:-1rem"
            
            

            
            var modal = document.getElementById("myModal");
            var boddy = document.getElementById("body");
            var te=document.createElement("p");
            te.textContent =data[i].title;
            
          
            // When the user clicks on <span> (x), close the modal
img.onclick = function() {
  modal.style.display = "none";
}
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            
            // When the user clicks the button, open the modal 
            img.onclick = function() {
              modal.style.display = "block";
              
             
            } 
            
            
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "block";
              }
            }
        
           titlesElt.append(contenuElt);
           contenuElt.appendChild(img);
           contenuElt.appendChild(titreElt);
           contenuElt.appendChild(modal);
          modal.appendChild(boddy);
          boddy.appendChild(te);
       
        }
          
        
     
    });



    

  
            
         
        
          

    

  