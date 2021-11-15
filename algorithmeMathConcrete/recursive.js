// récursivité
// indice: la fonction se rapelle elle même.

let exemple = {
    name: "premier ensemble abregé €",
    description : "possède plusieurs sous-ensembles avec d'autres sous ensembles",
    containerOne : {
        name: "abregé CO",
        letter : "\"A B C D E\"",
        number: [1,2,3,4,5],
        position: "name && letter && position ⊂ CO ⊂ €"
    },
    containerTwo: {
        name2: "abregé CT",
        letter2 : " \"F G H I J\"",
        number2: [6,7,8,9,10],
        position: " name2 && letter2 && number2 ⊂ CT ⊂ €"
    }
}

myRecursiveFoo(exemple);

function myRecursiveFoo(e){
    for (let propriete in e){
        if(typeof(e[propriete]) !== "object"){
            console.log(propriete + " : " + e[propriete]);
        } else {
            myRecursiveFoo(e[propriete])
        }
    }
}

// il ne reste qu'à se débrouiller pour que la visualisation soit ergonomique, pas comme ici.