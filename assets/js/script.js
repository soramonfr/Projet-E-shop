// Création tableau d'articles (Panier)

let cart = [];
let articles = document.getElementsByClassName('article');
// article.dataset.ref
// article.dataset.name
// article.dataset.price
// console.log(article);

for (const article of articles) {
    // Au clic sur panier, déclencher une fonction
    article.onclick = function (evt) {
        // ajoute un obj article au tableau "panier" {}
        let index = cart.findIndex((searchArticle) => searchArticle.ref === this.dataset.ref);
        if (index !== -1) {
            cart[index].quantity += 1;
        } else {
            cart.push({
                ref: this.dataset.ref,
                name: this.dataset.name,
                price: this.dataset.price,
                quantity: 1
            });
        }
        // On ne fait rien d'autre (prévenir refresh sur la page)
        evt.preventDefault();
    }
}

let displayCartBtn = document.getElementById("displayCart");
let cartTableElt = document.getElementById("cartTable");
function displayCart() {
    // Suppression des lignes existantes dans le tableau pour éviter que les lignes soient dupliquées lorsque l'on reclique sur le btn "afficher panier"
    cartTableElt.tBodies[0].innerHTML = "";
    let total = 0;
    // Génération des lignes dans le tableau
    cart.forEach(art => {
        let trElt = document.createElement("tr");
        trElt.className = "cart-line";
        trElt.innerHTML = "<td><h5 class=\"title text-truncate\">" + art.name + "</h5></td>\
        <td>" + art.ref + "</td>\
        <td class=\"price\">"+ art.price + " €" + "</td>\
        <td><input type=\"number\" value=\""+ art.quantity + "\"></td>\
        <td class=\"total text-center\">"+ Number.parseFloat(art.price) * Number.parseInt(art.quantity) + " €" + "</td>\
        <td class=\"text-center\"><button type=\"button\" class=\"deleteArticle\"><i class=\"fas fa-trash-alt\"></i></button></td>";
        cartTableElt.tBodies[0].appendChild(trElt);
        total += Number.parseFloat(art.price) * Number.parseInt(art.quantity);
    });
    // MAJ du total
    let finalResult = document.getElementById("result");
    finalResult.textContent = total + " €";

    let cartLines = document.getElementsByClassName("cart-line");
    for (const cartLine of cartLines) {
        // Ajout de l'action de mise à jour de la quantité d'article
        let articleQty = cartLine.querySelector("input");
        articleQty.onchange = function (evt) {
            let index = cart.findIndex((searchArticle) => searchArticle.ref === cartLine.children[1].textContent);
            cart[index].quantity = this.valueAsNumber;
            // Regénération du tableau (pour prendre en compte les sous totaux)
            displayCart();
        }
        // Ajout de l'action de suppression de l'article
        let deleteBtn = cartLine.querySelector(".deleteArticle");
        deleteBtn.onclick = function (evt) {
            let index = cart.findIndex((searchArticle) => searchArticle.ref === cartLine.children[1].textContent);
            cart.splice(index, 1);
            displayCart();
        }
    }
}

displayCartBtn.addEventListener("click", displayCart);

// Scroll top
let button = document.getElementById('scrollTop')

button.onclick = function (e) {
    e.preventDefault();;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Hide or Display des catégories

//  H&D Les catégories 
let bouquets = document.getElementById("bouquets");
let plantesInterieur = document.getElementById("plantesInt");
let plantesExterieur = document.getElementById("plantesExt");
let allProducts = document.getElementById("all-products");
let prod = document.getElementById("prod");

// H&D La navbar
let bouquetsNav = document.getElementById("bouquetsNav");
let plantesInterieurNav = document.getElementById("plantesIntNav");
let plantesExterieurNav = document.getElementById("plantesExtNav");
let homeNav = document.getElementById("indexNav");
let allProductsNav = document.getElementById("homeNav");

// H&D Les actions
allProductsNav.onclick = function (evt) {
    allProducts.style.display = "block";
    prod.style.display = "block";
    plantesInterieur.style.display = "block";
    plantesExterieur.style.display = "block";
    bouquets.style.display = "block";
}

bouquetsNav.onclick = function (evt) {
    prod.style.display = "block";
    bouquets.style.display = "block";
    plantesInterieur.style.display = "none";
    plantesExterieur.style.display = "none";
}

plantesInterieurNav.onclick = function (evt) {
    prod.style.display = "block";
    plantesInterieur.style.display = "block";
    bouquets.style.display = "none";
    plantesExterieur.style.display = "none";
}

plantesExterieurNav.onclick = function (evt) {
    prod.style.display = "block";
    plantesExterieur.style.display = "block";
    plantesInterieur.style.display = "none";
    bouquets.style.display = "none";
}