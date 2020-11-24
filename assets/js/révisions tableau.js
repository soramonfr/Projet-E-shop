
// Méthode utilisée = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

// 1. Déclaration d'un tableau, vide
let cart = [];

// 2. Identification et récupération d'un article' (html)
let article = document.getElementsByClassName('article1');
//En html, défini comme ci-dessous, en utilisant data-nom-de-l'attribut:
{/* <xxxxx data-ref="ref. 123" data-name="Roger" data-price="15"> */}

// 3. Ajouter un article au tableau (via array > .push)
// Déclencher un évènement au clic sur l'icône panier:
article.onclick = function (evt) { }
// Pour ça, on doit définir tout ce qui fera partie de l'article1: ref, nom, prix & qté
// Pour pouvoir utiliser plusieurs données sous le même id: on utilise la notion d'objet
// (https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript/6278564-definissez-des-objets-et-leurs-attributs-avec-des-classes#r-6278497)
// (https://developer.mozilla.org/fr/docs/Apprendre/HTML/Comment/Utiliser_attributs_donnes)
// S'écrit sous cette forme : nomdevariable.push({attribu1t: , attribut2: , etc})
// Exemple: 
cart.push({
    ref: this.dataset.ref,
    name: this.dataset.name,
    price: this.dataset.price,
    quantity: 1
});
// Subtilité: Quantité est définie à 1 (pas de html)
// Vérifier comment se comporte l'ajout au tableau. Ici, le bloquage du refresh était nécessaire // stoper tout autre cmpt que le navugateur pourrait faire d'où:
evt.preventDefault();

// 4. Que faire quand un article ajouté est déjà présent dans notre tableau? 
//1) D'abord, il faut savoir si l'article est déjà présent dans le tableau ou pas:
// On utilise pour ça la notion de .findIndex() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Comportement de findIdex: si l'article est présent dans le tableau renvoie son index, sinon -1 (pas présent). (index=position)
// A partir du résultat de findIndex, on peut définir une action : Si article déjà présent: on incrémente de +1, sinon on push.
// Pour ça, on fait une condition: Si index différent de -1 alors produit déjà existant donc on incrémente notre qté. Si index = -1 alors le produit n'existe pas donc on rajoute un élement dans notre tablea (via .push).
// On peut commencer à réfléchir sur notre fonction et nos conditions:
let index = cart.findIndex((searchArticle) => searchArticle.ref === this.dataset.ref);
// cart.findIndex() car on recherche au niveau de notre tableau, searchArticle c'est le paramètre qu'on a défini et celui que l'on va utiliser pour faire notre recherche dans le tableau par comparaison.
//findIndex prend une fonction en paramètre (callback), ici passe un paramètre élement du tableau à la fonction de callback. 
// La fonction de callback doit renvoyer vrai ou faux si elle trouve l'élement que l'on recherche. Cette f° de recherche est résumée par la f° fléchée ci-dessus.
// On appelle la méthode findIndex, on lui passe la f° de callback (searchArticle) => searchArticle.ref === this.dataset.ref)
// Si l'attribut ref de l'élement courant de mon tableau (cart) = a l'attribut data-ref de l'element html cliqué (this.dataset.ref)

// 2) On définit nos conditions pour savoir si on push ou incrémente
if (index !== -1) {
    cart[index].quantity += 1;
    // Si on a un index différent de -1 alors on ajoute +1 en .quantity au niveau de l'index renvoyé
} else {
    cart.push({
        ref: this.dataset.ref,
        name: this.dataset.name,
        price: this.dataset.price,
        quantity: 1
    });
}
    // Sinon on push (ajouter l'article dans notre tableau "array").

// Commentaire : choix de findIndex car il y a plusieurs façons de chercher dans son tableau https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const array1 = [{id:2},{id:85}];

const found = array1.findIndex(element => element.id > 100);

console.log(found);
// expected output: 12
