
ajaxGet("https://api.themoviedb.org/3/movie/now_playing?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=en-US&page=1&region=US", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    var data=title['results'];
    var overview= JSON.parse(reponse);
    var pata=overview['results'];
    var popularity= JSON.parse(reponse);
    var Note=popularity['results'];
    console.log(title);
         
    var titlesElt = document.getElementById("film");
    
        // Ajout du titre et du contenu de chaque article
        for (var i = 0; i <data.length; i++){
          
           var contenuElt = document.createElement("div");
           contenuElt.classList="col-3 col-md-3 col-lg-3";
           
           var img=document.createElement("img");
           
        
            img.src = "https://image.tmdb.org/t/p/w500"+data[i].poster_path+"";       
           img.style="height:80%"; 
            var titreElt=document.createElement("p");
            titreElt.textContent=data[i].title;
         
            titreElt.style="color:white;padding-bottom:20px;margin-top:0;margin-bottom:-1rem";
            var Notation=document.createElement("p");
            Notation.textContent=Note[i].popularity;
           
            Notation.style="color:green";
            titlesElt.append(contenuElt);
            contenuElt.appendChild(img);
            contenuElt.appendChild(titreElt);
            
             
         if(data[i]!==data[1]){

         
            var modal = document.getElementById("myModal");
            var boddy = document.getElementById("body");
          
        
          
            // When the user clicks on <span> (x), close the modal
img.onclick = function() {
  modal.style.display = "none";
}
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            
            // When the user clicks the button, open the modal 
            img.onclick = function() {
              modal.style.display = "block";
              var te=document.createElement("div");
                  
              var ter=document.createElement("h1");
                  ter.textContent=data[0].title;
                  ter.style="color:red";
              var tpp=document.createElement("p");
                   tpp.textContent =pata[0].overview;
              var tv=document.createElement("p");
              tv.innerHTML="<iframe width='560' height='315' src='https://www.youtube.com/embed/ywhTeWg8970' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
           contenuElt.appendChild(modal);
           modal.appendChild(boddy);
           boddy.appendChild(te);
           boddy.appendChild(ter);
           boddy.appendChild(tpp);
           boddy.appendChild(tv)
           document.cookie = "te; expires=Thu, 10 Dec 2020 06:45:00 UTC; path=/;";
             
            } 
            
            
            
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


};      


if(data[i]!==data[0]){
var modal = document.getElementById("myModal");
var boddy = document.getElementById("body");



// When the user clicks on <span> (x), close the modal
img.onclick = function() {
modal.style.display = "none";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
img.onclick = function() {
  modal.style.display = "block";
  var tee=document.createElement("div");
  var teeh=document.createElement("h1");
      teeh.textContent =data[1].title;
      teeh.style="color:red";
     
   var teep=document.createElement("p");
     teep.textContent =pata[1].overview;
   var tvv=document.createElement("p");
   tvv.innerHTML="<iframe width='560' height='315' src='https://www.youtube.com/embed/DWfPGIMDhNw' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

contenuElt.appendChild(modal);
modal.appendChild(boddy);
boddy.appendChild(tee);
boddy.appendChild(teeh);
boddy.appendChild(teep);
boddy.appendChild(tvv);

document.cookie = "tee; expires=Thu, 10 Dec 2020 06:45:00 UTC; path=/;";
} 



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}


}
        
   



if(data[i]!==data[1] && data[i]!==data[0] ){
  var modal = document.getElementById("myModal");
  var boddy = document.getElementById("body");
  
  
  
  // When the user clicks on <span> (x), close the modal
  img.onclick = function() {
  modal.style.display = "none";
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  img.onclick = function() {
    modal.style.display = "block";
    var tes=document.createElement("div");
    var tesh=document.createElement("h1");
    tesh.textContent=data[2].title
    tesh.style="color:red";
    var tesp=document.createElement("p");
  tesp.textContent =pata[2].overview;
  var tvvv=document.createElement("p");
  tvvv.innerHTML="<iframe width=560 height=315 src=https://www.youtube.com/embed/HVzBwSOcBaI frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
  contenuElt.appendChild(modal);
  modal.appendChild(boddy);
  boddy.appendChild(tes);
  body.appendChild(tesh);
  body.appendChild(tesp);
  boddy.appendChild(tvvv);
  document.cookie = "tes; expires=Thu, 10 Dec 2020 06:45:00 UTC; path=/;";
   
  } 
  
  
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  
  }
          
        }
     
    });


   
  function myfunction(){

    var query=document.getElementById("recherche").value;
    
    var titlesearch="Votre recherche : "+query+""
    
    var lien="https://api.themoviedb.org/3/search/movie?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=en-US&query=recherche"+query+"&page=1&include_adult=false";
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    var data=title['results'];
    var overview= JSON.parse(reponse);
    var pata=overview['results'];
    var popularity= JSON.parse(reponse);
    var Note=popularity['results'];
    
    console.log(title);
    var Trouver=document.createElement("h1");
   
    Trouver.textContent=titlesearch;
    recherche.append(Trouver);
  
  }



  