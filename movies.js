var titlesElt = document.getElementById("title");
ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=us&page=1", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    
    
    console.log(title);
        // Ajout du titre et du contenu de chaque article
        var contenuElt = document.createElement("div");
       
        contenuElt.textContent = title.contenu;
        var titreElt = document.createElement("h2");
    

        titreElt.textContent = title.titre;
       
        
        contenuElt.append(titreElt);
        console.log(contenuElt);
       
    });


   