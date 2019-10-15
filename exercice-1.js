//Exercice 1 : Suite de Fibonacci


//Déclaration de la fonction suiteFibona

function suiteFibona(){
            
    //Déclaration des variables 
    let i = 0; //Premier élément de la suite        
    let j = 1; //Deuxième élément de la suite
    
    console.log("Elément = " + i);
    console.log("Elément = " + j);
    
    for(let k=0 ; k<=20 ; k++){
        let c = i+j;
        i = j;
        j = c;
        
        console.log("Elément = " + c);
    }  
}

suiteFibona();