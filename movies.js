
ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=en-US&page=1", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    var data=title['results'];
    console.log(title);
    var titlesElt = document.getElementById("film");
    
        // Ajout du titre et du contenu de chaque article
        for(var i=0; i<20;i++){
           var contenuElt = document.createElement("div");
           contenuElt.classList="col-3 col-md-3 col-lg-3";
           
           var img=document.createElement("img");
           
        
            img.src = "https://image.tmdb.org/t/p/w500"+data[i].poster_path+"";       
            
           
            // var contenuElts=document.createElement("p");
             var titreElt=document.createElement("h6");
             titreElt.textContent=data[i].title;
            titlesElt.appendChild(contenuElt);
            contenuElt.appendChild(img);
            //contenuEltsim.appendChild(img);
          //  img.appendChild(contenuElts);
            
          img.appendChild(titreElt);
         
           
            console.log(titreElt);
            // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("film");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
          
        }
     
    });



    

  