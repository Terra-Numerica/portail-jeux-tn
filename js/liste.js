/* Déclaration des variables globales */

const cycleColors = {
    "1": "green",
    "2": "red",
    "3": "blue",
    "4": "purple"
}

var arrJeux = [];


/* Retourne un élément gameCard en HTML sous forme d'une chaîne de caractères à partir de l'objet jeu passé en paramètre. */
const renderGameCard = (jeu) => {
    var out = `<div class="gameCard">
    <img class="gameThumbnail" src="assets/${jeu.thumbnail}" alt="">
    <div class="gameDesc">
        <div class="descFade"></div>
        <h3>${jeu.nom}</h3>
        <p>${jeu.desc}</p>
    </div>
    <div class="gameInfo">
        <div class="cycleInfo">
            <h3>Cycle <span style="background-color: ${cycleColors[jeu.cycle]};" class="cycle">${jeu.cycle}</span></h3>
        </div>
        <div class="themesInfo">
            <h3>Thèmes</h3>\n`;
    jeu.themes.forEach((el) => {out = out.concat(`<span>${el}</span>\n`);});
    out = out.concat(`</div></div></div>`);
    // console.log(`OUT : ${out}`);
    return out;
};

/* Remplace la liste de jeux affichée par une nouvelle liste passée en paramètre. */
const renderGameList = (liste) => {
    $("#cardList").empty();
    liste.forEach((el) => $("#cardList").append(renderGameCard(el)));
}

/* Filtre la liste de jeux selon la sélection de cycle(s). 
Affiche tous les jeux si aucun filtre n'est sélectionné. */
const filterCycle = () =>{
    //Récupère filtres sélectionnés

    var filtre = {
        cycle1: $("#check1").prop("checked"),
        cycle2: $("#check2").prop("checked"),
        cycle3: $("#check3").prop("checked"),
        cycle4: $("#check4").prop("checked") 
    }
    
    // console.log(filtre);

    //Crée sous-liste filtrée le cas échéant

    var jeuxFiltres = [];

    if(filtre["cycle1"] === false && filtre["cycle2"] === false && filtre["cycle3"] === false && filtre["cycle4"] === false) {
        jeuxFiltres = arrJeux;
    }
    else {
        arrJeux.forEach(el => {
            if(filtre["cycle" + el["cycle"]] === true) {jeuxFiltres.push(el);}
        });
    }

    //Remplace contenu affiché par la sous-liste
    renderGameList(jeuxFiltres);
}

/* Filtre la liste de jeux selon les mots-clés entrés dans la barre de recherche. 
Retourne faux pour empêcher le rechargement de la page.*/
const filterSearch = () => {
    var searchString = $("input[type=search]").val();

    if(searchString === "") {renderGameList(arrJeux);}
    else {
        var jeuxFiltres = [];
        arrJeux.forEach(jeu => {
            if(jeu.nom.includes(searchString) || jeu.desc.includes(searchString ||
               jeu.themes.findIndex(el => el.includes(searchString)) >= 0)) {
                jeuxFiltres.push(jeu);
            }
        });
        renderGameList(jeuxFiltres);
    }

    return false;
}


/* Exécution après le chargement du DOM */
$(function() {

    //Importe la liste de jeux depuis jeux.json et affiche
    $.getJSON("js/jeux.json", (json) => {
        arrJeux = json;
        console.log("json imported");
    })
        .done(() => {
            renderGameList(arrJeux);
    });
    

    //Event binding
    $(".searchForm").change(filterCycle);
    $(".searchForm").submit(filterSearch);
});