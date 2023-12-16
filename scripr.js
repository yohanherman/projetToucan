
const error = document.querySelector(".error");
const inputField = document.querySelector("#inputText");
const iconsSearch = document.querySelector(".iconsSearch")
const text = document.querySelector(".texte")
const parentLoader = document.querySelector(".parentLoader")

// const fieldinput = document.querySelector("input[type=text]")

// gestion d'erreur de l'input/validation client

const validate = (e) => {

    e.preventDefault(e)
    if (inputField.value.trim() === "") {
        error.innerText = "The Field is Empty";
        error.style.color = "red";
        inputField.style.border = "2px solid red"

    } else if (isNaN(inputField.value.trim())) {

        error.innerText = "Please Enter a Numerical value";
        error.style.color = "red";
        inputField.value = "";
        inputField.style.border = "2px solid red"
        inputCounter.innerHTML = 13

    } else if (inputField.value.length < 13) {
        error.innerText = "The code is to short "
        error.style.color = "red";
        inputField.style.border = "2px solid red"

    } else {
        error.innerHTML = "";
        inputField.style.border = "none"

        parentLoader.style.display = "flex";

        callAPI()

        // retrait spinner
        const IdSpinner = setTimeout(removeSpinner, 3000)

    }

}
iconsSearch.addEventListener("click", validate)


// mise en place du compteur de caracteres dans le champs de saisie

const maxlength = inputField.getAttribute("maxlength")
const inputCounter = document.querySelector(".inputCounter")


inputField.addEventListener("input", (e) => {
    const valuelength = e.target.value.length;
    const leftchart = maxlength - valuelength;
    inputCounter.innerHTML = leftchart;

    if (leftchart < 0) return;

})

// apparition texte au scroll

const displayText = () => {

    if (window.scrollY > 250) {
        text.style.left = "0"
    }

}

window.addEventListener("scroll", displayText)

//consommation de l'API


//recuperation des elements du DOM
const infoPackaging = document.querySelector(".infoPackaging")
const marqueProduits = document.querySelector(".marqProduit")
const nomDuProduit = document.querySelector(".nomProduit")
const categorie = document.querySelector(".CatProduit")
const packaging = document.querySelector(".infoPackaging")
const countries = document.querySelector(".countries")
const image = document.querySelector(".produit")



const callAPI = () => {
    // ce container me sert a styler les details du produit
    const containerprod = document.querySelector(".containerprod")

    const code = document.querySelector("#inputText");

    fetch(`https://fr.openfoodfacts.org/api/v0/product/${code.value}`)

        .then((response) => response.json())

        .then((data) => {

            image.src = data.product.image_url
            nomDuProduit.innerHTML = "PRODUCT NAME : " + data.product.abbreviated_product_name;
            marqueProduits.innerHTML = " BRAND : " + data.product.brands;
            categorie.innerHTML = " CATEGORY : " + data.product.categories;
            packaging.innerHTML = " PACKAGING : " + data.product.packaging_old;
            countries.innerHTML = " ORIGIN : " + data.product.countries;
            containerprod.style.background = "#f1f2f9"
            containerprod.style.boxShadow = "0 0 7px grey"
            image.style.marginBottom = "20px"
        })

        .catch(error => {
            return "error : " + error
        })

}

// fonction pour retirer le spinner

const removeSpinner = () => {
    parentLoader.style.display = "none"
}

// le menu burger

const showBurger = document.querySelector(".burger")
const ul = document.querySelector(".list");
const main = document.querySelector("main")
const header = document.querySelector(".header")
const removeBurger = document.querySelector(".btnRmvBurg")


showBurger.addEventListener("click", (e) => {
    e.preventDefault()

    ul.style.marginLeft = "0";
    main.style.opacity = "0.4"
    header.style.opacity = "0.4"

})

removeBurger.addEventListener("click", (e) => {
    e.preventDefault()

    ul.style.marginLeft = "-100%";
    main.style.opacity = "1"
    header.style.opacity = "1"


})

























