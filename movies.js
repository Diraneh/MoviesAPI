function aleatoire(){
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
        }

        function aleadiv(){
            let b = document.body;
            let newP = document.createElement('div');
            let newTexte = document.createTextNode('Texte écrit en JavaScript');
            b.prepend(newP);
            b.append(newTexte);

            
        }