// Scroll top
let button = document.getElementById('scrollTop')

button.onclick = function (e) {
    e.preventDefault();;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Création tableau d'articles (Panier)

let cart = [];

let article = document.getElementById('article1');
// article.dataset.ref
// article.dataset.name
// article.dataset.price
// console.log(article);

// Au clic sur panier, déclencher une fonction
article.onclick = function (evt) {
    console.log(this.dataset.ref);

    // TODO Gérer le cas ou un article existerait déjà 
    // ajoute un obj article au tableau "panier" {}
    cart.push({
        ref: this.dataset.ref,
        name: this.dataset.name,
        price: this.dataset.price,
        quantity: 1
    });

    // On ne fait rien d'autre (prévenir refresh sur la page)
    evt.preventDefault();
}

let displayCartBtn = document.getElementById("displayCart");
let cartTableElt = document.getElementById("cartTable");
function displayCart() {
    /*
    <tr>
        <td>NomArticle</td><td>Ref</td><td>Prix</td><td>Qte</td><td>btn</td>
    </tr>
    */
    cart.forEach(art => {
        let trElt = document.createElement("tr");
        trElt.innerHTML = "<td><h5 class=\"title text-truncate\">" + art.name + "</h5></td>\
        <td>" + art.ref + "</td>\
        <td class=\"price\">"+ art.price +"</td>\
        <td><input type=\"number\" value=\""+ art.quantity +"\"></td>\
        <td class=\"total text-center\">"+ Number.parseFloat(art.price) * Number.parseInt(art.quantity) +"</td>\
        <td><button type=\"button\" class=\"btn btn-danger deleteArticle\">Supprimer cet article</button></td>";
        cartTableElt.tBodies[0].appendChild(trElt);
   }) 
   console.log(cartTableElt.tBodies);

}
displayCartBtn.addEventListener("click", displayCart);

