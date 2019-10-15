//Exercice 1 : Suite de Fibonacci


//Déclaration de la fonction suiteFibona

function suiteFibona(){
            
    //Déclaration des variables 
    let i = 0; //Premier élément de la suite        
    let j = 1; //Deuxième élément de la suite
    
    console.log("1er Elément = " + i);
    console.log("2eme Elément = " + j);
    
    for(let k=0 ; k<18 ; k++){ // k < 18 car les deux premiers éléments sont i et j
        let c = i+j;
        i = j;
        j = c;
        
        console.log("Elément = " + c);
    }  
}

suiteFibona();