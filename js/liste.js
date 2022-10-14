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
            <h3>Cycle <span class="cycle">${jeu.cycle}</span></h3>
        </div>
        <div class="themesInfo">
            <h3>Thèmes</h3>\n`;
    jeu.themes.forEach((el) => {out = out.concat(`<span>${el}</span>\n`);});
    out = out.concat(`</div></div></div>`);
    console.log(`OUT : ${out}`);
    return out;
};

$(function() {
    console.log("test");

    var arrJeux;
    $.getJSON("js/jeux.json", (json) => {
        arrJeux = json;
        console.log("json imported");
    })
        .done(() => {
            console.log(arrJeux);
            console.log(`arrJeux[0] : ${arrJeux[0]}`);
            console.log(`arrJeux[0].themes : ${arrJeux[0].themes}`);
            console.log(`arrJeux[0].themes[0] : ${arrJeux[0].themes[0]}`);
            arrJeux[0].themes.forEach((el) => console.log(el));
            arrJeux.forEach((el) => $("#cardList").append(renderGameCard(el)));
    });

    // fetch('js/jeux.json')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // $("#cardList").append(renderGameCard(jeux[0]));
});