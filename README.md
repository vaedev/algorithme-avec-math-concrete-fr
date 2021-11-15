# algorithme-avec-math-concrete-fr

# mathématiques concrètes - algorithmes

Bon, désolé, ce n'est pas si petit que ça malgré le nom du fichier... Mon objectif est de tenter de démontrer l'utilité d'une petite liste de 3 conseils usités généralement dans les mathématiques concrètes. 

Je souhaite transposer ce procédé à l'usage des néophytes en informatiques sans grande vocation mathématiques (concrètes ou autres) le plus simplement possible.

L'idée m'est venu quand j'ai commencé à apprendre les dites mathématiques concrètes, une discipline qui ne met pas tout le monde d'accord dans le monde des mathématiciens, car on cherche bien plus une "utilité" qu'une "vérité", je ne fais ici aucune digression le sujet est trop long... Retenez que les mathématiques concrètes tentent souvent dans son utilisation de "deviner" les formules et non comme les mathématiques "abstraites" fonctionnant en "cercle fermé" (Un vrai troll dans le milieu, si! si!).

Et comme nos algorithmes sont souvent créé, devinés et améliorés par nous même développeurs, la tentative d'appliquer cette méthode à ce que nous a légué Al-Khwarizmi me semble intéressante à regarder : la compréhension que l'œuf d'or n'est pas aussi intéressant que la poule qui l'a pondu. (les résultats ne sont pas nos objectifs, nous ne souhaitons que comprendre et faire mieux. Pour cela nous devons nous focaliser sur nos capacités à améliorer nos prises de décisions, **quitte à ne même pas [regarder les résultats](https://www.youtube.com/watch?v=69w3mZOHEtU&t=609s) , ou du moins ne pas les surestimer pour les prochaines prises de décision, les "paris" que nous faisons**.)

    Jugez les paris, et non les résultats.

**⚠ Attention! ⚠**

J'ai tenté de faire une explication, elle ne conviendra pas forcément à tout le monde et je reste conscient du problème que peux engendrer une erreur dans cette démonstration. Il est préférable de même les oublier si elles vous embrouillent l'esprit.

## Définitions et astuces non-exhaustives pour produire ses formules et algorithmes

### conseil en 3 étapes : 
_deviner, essayer(ici exemple avec la recursivité) et induire._
### 1- tenter de deviner
Pour ça il faut étudier les petits cas, cela nous permet d'avoir un aperçu du problème ; de plus, cela nous sera utile dans les étapes suivantes. ça aide à trouver une formule générale et évite les erreurs idiotes.

    c'est sans doute plus facile de calculer:
    n = 3, que 
    n = 8, ou encore que 64, ou encore que 469512....

### 2- essayer (récursivité)
Trouver et prouver une expression mathématique pour la quantité en question. La récursivité **entre autres** est souvent apprécié pour ça.

La récurrence, c'est montrer qu'une propriété est vraie pour n'importe quel rang:
    
    ex:
    Si pour n, pour n+1 également.
    Si pour 2, pour 2+1 également.
    Si pour 3, pour 3+1 également...
    
... Jusqu'à pourquoi pas:

    Si pour 1245, alors pour 1245 + 1 également.
 
On utilise souvent l'image des dominos avec la logique : "si je fais tomber le domino 1, alors le 2 tombera. si le 2 tombera, alors 2+1 tombera, etc.."

Dans la programmation, la récursivité c'est très souvent "rappeler la fonction dans la fonction même", exemple :

```javascript
// récursivité
// indice: la fonction se rapelle elle même.
// très pratique comme dans ce cas ou on veut log notre let=>"exemple" possédant plein de sous-ensembles.

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
            //elle est ici notre récurence!
            myRecursiveFoo(e[propriete])
        }
    }
}
```
**⚠ Attention!⚠**

La récursivité pour trouver une solution est souvent très utile pour délimiter le problème avec un crayon et du papier. Dans les langages formels de programmation (javascript, python, java...) ce n'est pas forcément le cas. faites donc la différence entre récursivité en mathématiques concrètes et informatique/langage.

### 3- induction
Trouver et prouver une formule close pour l'expression mathématique de l'étape qui précède, peut parfois dans des cas simples se passer des deux étapes précédentes.

l'induction mathématique est une méthode générale permettant de prouver qu'une assertion concernant un entier n est vraie pour tout n⩾0. Remarquez que l'on utilise n⩾0 et non n=0 car peut-être qu'il existe une meilleure solution, quelqu'un de plus malin peut trouver quelques choses de plus optimisées et élégant.

___

#### **_exemple_**:
Pas simple? Regardons ensemble un cas d'étude:

"Quentin, un anthropologue qui se propose d'étudier la relation entre la taille et le poids d'individus appartenant à une même communauté vous demande de faire un programme pour faciliter son calcul. Vous allez devoir calculer..."

... En fait dans la vraie vie que ce soit en programmation ou en mathématiques on ne vous dit pas toujours ce qu'il faut faire, dommage ! C'est bien à l'école: les problèmes de mathématiques sont bien délimité, avec leurs paramètres et leurs détails accomodant. Mais comme je ne veux pas vous faire peur, disons qu'ici, on nous demande de calculer [une covariance !](https://fr.wikipedia.org/wiki/Covariance) 

Et comme on est des néophytes, on va déjà sous-traiter le problème et s'y borner, c'est dans le cadre du 1er conseil... et votre tache consiste à faire un petit algorithme calculant un petit zigouigoui qui se trouve dans la formule pour calculer une covariance: [sigma Σ](https://fr.wikipedia.org/wiki/Sigma)!

_pas de panique, ça permet juste de faire des sommes simples._

![image info](https://i.ytimg.com/vi/AMU9OK78ats/maxresdefault.jpg)

C'est parti, étape par étape: deviner, essayer, induire.

### 1-deviner, tenter...
nous pouvons toujours copier coller, mais quand ça ne marche pas ou que personne n'a reflechi à votre problème... c'est la catastrophe.

![image info](./sigmaExemple.jpg)
_image visible dans le dossier_

Au début, j'observe. j'ai tout compte fait plusieurs paramètres à prendre en compte, sur la photo du 1er exemple c'est:
    
    4 et x et ². ici 4 est mon sommet, et x mon indice et ² mon exponent.

Je fais au plus simple et je regarde si je peut le faire qu'avec 2 paramètres et non les trois. Je fais ce choix car en plus j'ai du mal avec l'idée d'exponant. Je prend les plus élémentaires donc `4 et x` tente de poser les bases de mon algo en pseudo code.  

Ah et au fait : le faire en pseudo-code est vraiment utile, car plus lisible pour les profanes de votre langage (pour un utilisateur de python si vous êtes sur javascript par exemple) ou de la programmation, relfechissez-y.

    ALGORITHME getSum
    DEBUT

    FIN

Mais que mettre entre DEBUT et FIN ? Voyons voir : quand je regarde l'image précédente, je vois un comportement qui en tant que développeur dois m'interpeller tout de suite:

    Σ[...]= 1+2+3+4 = [...]

Ce `1+2+3+4` est vraiment l'image même d'une boucle, alors je vais la poser dans mon algorithme:

    1- je met ma boucle que j'ai identifié
     ALGORITHME getSum
    DEBUT
        POUR cpt ALLANT DE 1 A 4 PAR PAS DE 1 FAIRE 
        <!-- À ce stade, je ne sais pas quoi faire, ce que mettre dans la boucle.
        Mais allons-y par tâtonnement ! -->
    FIN
    _____
je découvre cette [magnifique page](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators) qui me permet d'expliquer clairement ce que j'attends de ma boucle

    2- Je décris le mieux possible ce que je mets dans la boucle.
     ALGORITHME getSum
    DEBUT
        POUR cpt ALLANT DE 1 A 4 PAR PAS DE 1 FAIRE 
            Affectation après addition. 
    FIN

après traduction que donne le tableau du site, ça donne:

     ALGORITHME getSum
    DEBUT
        POUR cpt ALLANT DE 1 A 4 PAR PAS DE 1 FAIRE 
            x = x + y (ou x += y)
           <!-- mais c'est quoi ce x et ce y? zut je suis perdu... -->
    FIN

    je fais la correction direct et j'explique en bas:

      ALGORITHME getSum
    DEBUT
        x=0
        POUR cpt ALLANT DE 1 A 4 PAR PAS DE 1 FAIRE 
            x = x + y (ou x += y)      
    FIN


J'ai rajouté `x=0` pour initialiser une variable. En fait, le x ici est mon résultat, ici, c'est ce que je cherche : c'est ma somme (et sigma calcule des sommes) ! Et comme nous cumulons les additions dans la boucle (à savoir entre 1 et 4 par pas de 1) je rajoute à chaque fois le résultat.

Ici, cette étape relève de la décision et de la stratégie c'est donc à vous de vous mettre d'accord. 
J'ajuste certains points, je fais le choix d'utiliser une fonction qui utilisera 2 paramètres de fonction. Je veux également que le résultat s'affiche à la fin. j'inclus les paramètres directement dans la boucle, remplacant certain terme de mon pseudo code plus haut:

    3-  Je donne la forme la plus précise de ce que je veux:

    FONCTION calculSigma(sommet,indice) 
    VARIABLE:
        x: ENTIER
    DEBUT
        POUR cpt ALLANT DE sommet A indice PAR PAS DE 1 FAIRE 
            x = x + y
        RETOURNER x (ou AFFICHER x)
    FIN
Sur la planification et la stratégie, je vous donne 2 définitions qui me tiennent à cœur. Je le fais, car c'est souvent ici que le néophyte coince.
1. c'est l'art de ce **fixer des objectifs** et de proportioner les moyens pour y arriver (ce que vous gagner vs ce que vous perdez [ le plus important! ] ). Un bon stratège prend souvent plus en compte le pire à éviter que le meilleur à gagner car le potentiel (le gain) relève souvent de l'idéalisme alors que la stratégie tend au pragmatisme.

2. Les stratégies servent à construire les réalités que nous désiront.

Un cours complet ne serait pas de trop, mais alourdirait ce format. Restez vigilant à ce qu'est un objectif: ce n'est ni:
1. une auto-satisfaction.
2. un nombre, une métrique (comme un chiffre d'affaire, le nombre de pompe que vous voulez faire...) voir[ la loi de Goodhart](https://www.google.com) qui peut provoquer entre autre [l'effet cobra](https://fr.wikipedia.org/wiki/Effet_cobra) (Je peux lire cet article 10 fois qu'il me fait toujours rire.).

Bonne chance les stratèges et les autres... 

C'est le grand moment, théoriquement ça passe et comme la pratique c'est bien aussi, mettons tout ça en **javascript**!
____

Je vais exactement déployer les phases précédentes en JavaScript pour comparer mon pseudo-code et de mon langage formel :

```javascript
//vous vous rappelez de ça?

    //  1- je met ma boucle que j'ai identifié
    //      ALGORITHME getSum
    //     DEBUT
    //         POUR cpt ALLANT DE 1 A 4 PAR PAS DE 1 FAIRE 
    //         <!-- À ce stade, je ne sais pas quoi faire, ce que mettre dans la boucle. Mais vais allons-y par tâtonnement ! -->
    //     FIN


 //nous le mettons en javascript:

  let getSum () => {
    // si je commence à taper for, on me met le pattern suivant:
        for (let index = 0; index < array.length; index++) {
        // j'ai juste supprimé unn contenu automatique ici car je suis bête et discipliné quand j'opère:
        //  il y a un temps pour réfléchir et un temps pour agir mais jamais en même temps!
    }
    }

```
Je précise un peu plus, je mets tous mes éléments comme dans l'algorithme en respectant l'écriture de javascript. Je remplace "index" par "i" qui est bien plus usité, je mets un return et je console log en bas en dehors de ma fonction:

```javascript
//    3-  Je donne la forme la plus précise de ce que je veux.
//     FONCTION calculSigma(indice,sommet) 
//     VARIABLE:
//         x: ENTIER
//     DEBUT
//         POUR cpt ALLANT DE sommet A indice PAR PAS DE 1 FAIRE 
//             x = x + y
//         RETOURNER x (ou AFFICHER x)
//     FIN

  let getSum = (indice, sommet) => {
        let sum = 0;
        for (let i = indice; i <= sommet; i++) {
             sum += i;
        }
        return sum; 
    }

console.log("reponse sigma: " + getSum(1, 4));
```
roulement de tambour après un petit `node monFichier.js` dans le terminal ...

```
réponse sigma: 10
```
 magie ça semble marcher! 
 ### 2- récursivité

 Nous testons avec d'autre paramètres voir si la formule marche (surtout en bougeant ici la somme, ce qui est le plus courant dans les sigmas)... je dois au moins pouvoir vérifier les calculs à la main pour que ça ai du sens avec des:

 ```javascript
 console.log("reponse sigma: " + getSum(1, 4));
 console.log("reponse sigma: " + getSum(1, 5));
 console.log("reponse sigma: " + getSum(2, 6));

// et comme les sigmas c'est parfois plein d'autre trucs, je teste d'autres formules de la même façon:

console.log("reponse sigma: " + getSum(1, -4));
console.log("reponse sigma: " + getSum(1, -5));
console.log("reponse sigma: " + getSum(1, -6));

 // tiens zut, avec des nombres négatif ça ne semble pas marcher...
 ```

Voila pourquoi ce moment est super cool, il m'a permis de délimiter la puissance et surtout **les limites** de mon algorithme, de mon langage, de ma technologie...et de moi! Aucun algorithme ne marchera pour tout : quand on a un marteau, on prend tout ce qui a devant nous pour des clous. Tel est le danger.

 Nous pouvons tout de même être content, la formule marche, mais qu'avec des nombres positifs et je sais que mes paramètres sont limités, je mets ça dans un coin de ma tête, le mieux est de le stipuler dans un readme. Md, car dans mon cas, je n'ai besoin que de cette version de cette formule ! On verra ça un peu plus loin et en attendant, je conçois ma 3ème et dernière étape :

### 3- induction

bon, ici ma formule est déjà marqué, je vais me servir de l'induction avec comme point de départ mon algorithme:


```javascript

//tel sera mon point de départ si je veux optimiser ou rajouter des éléments dans ma formule soit en pseudo code,
// soit directement avec mon langage voir les deux: à vous de voir. et voila l'induction.

// "calcul sigma en javascript si n≥0". ça c'est pour le fun vous n'êtes pas obligé de le maquer comme ça.

 let getSum = (indice, sommet) => {
        let sum = 0;
        for (let i = indice; i <= sommet; i++) {
             sum += i;
        }
        return sum; 
    }
```

____
Partant pour améliorer la formule et que ça aie du sens ? Allez, c'est parti, nous allons tenter de rajouter un exponant.

Sur le second exemple de l'image plus haute, on voit un x², j'ai donc un choix **stratégique** à faire :

    -Soit je fais une formule qui me calculera toujours des x².

    -Soit je fais en sorte à ce que mon ² puissent devenir le nombre de mon choix, ce qui colle plus à l'idée d'exponent.

Le second choix est bien plus souple et comme je me sens à l'aise sur le JavaScript je le fais directement comme ça en reprenant...mon induction juste en haut! Mais si je veux, je peux reprendre mon pseudo-code. Je reprends ma formule plus haute et tente de définir si je peux rajouter des choses, et en effet, je dois rajouter un paramètre (exponent).


```javascript
//j'ai changé le nom de ma fonction, rajouté "exponent" dans mes paramètres de fonction.
 let getSumExpo = (indice, sommet,exponent) => {
        let sum = 0;
        for (let i = indice; i <= sommet; i++) {
            //il va falloir encore rajouter des choses ici, je vais bien m'amuser encore.
             sum += i;
        }
        return sum; 
    }
```
La, j'ai besoin de mettre pause ma réflexion, celui qui réfléchit bien, c'est celui qui sait s'arrêter au stop de la réflexion et non celui qui appuie sur le champi. Comment on fait des exponants en JavaScript déjà ? Il va falloir que je me retape une autre fonction ? Zut!... Mais ouf ! Après recherche, je sais qu'il existe une fonction  [Math.pow(base, exposant)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) alors ça, c'est cool ! intégrons la de suite :

```javascript
 let getSumExpo = (indice, sommet,exponent) => {
        let sum = 0;
        for (let i = indice; i <= sommet; i++) {
             sum = sum + Math.pow(i, exponent);
        }
        return sum; 
    }

console.log("reponse sigma coef: " + getSumExpo(1, 4, 2));
```

résultat console:  `reponse sigma coef: 30`

Là, je danse, j'ai réussi ! Après plusieurs tests de `console.log()` en nombre négatif ça ne marche toujours pas, mais comme je n'en ai pas l'usage, je me pencherai sur le problème si besoin, pour l'instant je fête ma victoire ! 🍺

Je n'ai pas parlé de toutes les erreurs que j'ai faites avant d'arriver ici, ne croyez pas que ça marche par magie : pour la formule de base, j'ai dû faire une dizaine de tests quand bien même certain aurai trouvé cet algorithme facile. Ce qui est d'interessant c'est de créer une façon de créer vos algorithme qui prend la même démarche:

    j'ouvre ma fonction, je met ma boucle et... tiens que dois-je mettre dedans?

Il se trouve que c'est surtout dans cette étape que j'ai tendance à coincer personellement, le fait de le savoir me permet d'être **vigilant**. 

Et vous ? Où sont vos zones d'incertitude ? La connaître est l'atout le plus précieux en terme d'apprentissage et de méthodologie.

____

Je remercie la liste des ouvrages et des auteurs qui m'ont aider à faire ce petit article/essai, à savoir :
1. _"mathématiques concrètes"_ de **Ronald Graham**.
2. **Lê Nguyên Hoang** de la chaine youtube _"science4all"_.
3. _"Algorithmes - Notions de base"_ de **Thomas H. Cormen**.






