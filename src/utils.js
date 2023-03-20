import thumbnails from './public/json/thumbnails.json' assert {type: 'json'};

export async function getJeux(params = "") {

    const jeux = await fetch(params === "" ? process.env.APIBaseURL : process.env.APIBaseURL + params).then((res) => res.json());

    jeux.forEach((jeu) => {
        const thumbnail = thumbnails.find((thumbnail) => parseInt(thumbnail.id) === parseInt(jeu.id));
        if (thumbnail) Object.keys(thumbnail).forEach((key) => jeu[key] = thumbnail[key]);
    });

    return jeux;
};

export async function getJeu(jeuId) {
    return (await getJeux()).find((jeu) => parseInt(jeu.id) === parseInt(jeuId));
};