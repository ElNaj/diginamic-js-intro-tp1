//Exercice 2 : Suite de Fibonacci, affichage sur la page xeb et saisi utilisateur

//Saisi utilisateur
var saisi = prompt("Veuillez saisir un nombre : ");

//Déclaration de la fonction suiteFibona
function suiteFibona(saisi){
            
    //Déclaration des variables 
    var i = 0; //Premier élément de la suite        
    var j = 1; //Deuxième élément de la suite
    
  //  console.log("1er Elément = " + i);
   // console.log("2eme Elément = " + j);
    
    for(var k=0 ; k<saisi ; k++){ // k < 18 car les deux premiers éléments sont i et j
        var c = i+j;
        i = j;
        j = c;
        
        document.write("Elément = " + c +"<br/>");
    }  

}
suiteFibona(saisi);