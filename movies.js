
ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=us&page=1", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    var data=title['results'];
    console.log(title);
    var titlesElt = document.getElementById("film");
        // Ajout du titre et du contenu de chaque article
        for(var i=0; i<20;i++){
            var contenuElt = document.createElement("div");
       
            var titreElt = document.createElement("h2");
        
    
            titreElt.textContent = data[i].title;
           
            titlesElt.appendChild(contenuElt);
            contenuElt.appendChild(titreElt);
            console.log(titreElt);

        }
       
       
    });


   