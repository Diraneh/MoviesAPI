

var UniqueRandom = {
            NumHistory: new Array(),
            generate: function (maxNum) {
                var current = Math.ceil(Math.random() * (maxNum));
                if (maxNum > 1 && this.NumHistory.length > 0) {
                    if (this.NumHistory.length != maxNum) {
                        while ($.inArray(current, this.NumHistory) != -1) {
                            current = Math.ceil(Math.random() * (maxNum));
                        }
                        this.NumHistory.push(current);
                        return current;
                    } else {
                      
                        return current;
                    }
                } else {
                   
                    this.NumHistory.push(current);
                    return current;
                }
            }
            
        };
ajaxGet("https://api.themoviedb.org/3/movie/popular?api_key=2bb0925fc8fc15c40b13b090730ac54e&language=us&page=1", function (reponse) {
    // Transforme la réponse en un tableau d'titles
    var title= JSON.parse(reponse);
    var data=title['results'];
    console.log(title);
    var titlesElt = document.getElementById("film");
    
        // Ajout du titre et du contenu de chaque article
        for (var i = 0; i <data.length; i++){
          
           var contenuElt = document.createElement("div");
           contenuElt.classList="col-3 col-md-3 col-lg-3";
           
           var img=document.createElement("img");
           
        
            img.src = "https://image.tmdb.org/t/p/w500"+data[i].poster_path+"";       
            
            var titreElt=document.createElement("p");
            titreElt.textContent=data[i].title;
            
            titreElt.style="color:white;padding-bottom:20px;margin-top:0;margin-bottom:-1rem"
            
            titlesElt.append(contenuElt);
            contenuElt.appendChild(img);
            contenuElt.appendChild(titreElt);
            
             
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
              var te=document.createElement("div");
            te.textContent =data[1].title;
            
           contenuElt.appendChild(modal);
           modal.appendChild(boddy);
           boddy.appendChild(te);
        
             
            } 
            
            
            
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


};      


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
  var tee=document.createElement("div");
tee.textContent =data[0].title;

contenuElt.appendChild(modal);
modal.appendChild(boddy);
boddy.appendChild(tee);

 
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
    var tee=document.createElement("div");
  tee.textContent =data[2].title;
  
  contenuElt.appendChild(modal);
  modal.appendChild(boddy);
  boddy.appendChild(tee);
  
   
  } 
  
  
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  
  }
          
        }
     
    });



    
  

  
            
         
        
          

    

  