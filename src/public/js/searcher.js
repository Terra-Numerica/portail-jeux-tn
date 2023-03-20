const checkboxes = document.querySelectorAll(".search-checkbox input[type='checkbox']");
const searchInput = document.querySelector("#search-name");
const cards = document.querySelector(".cards");

let timer;

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        clearTimeout(timer);
        timer = setTimeout(() => useSearcher(), 1000);
    });
});

searchInput.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => useSearcher(), 1000);
});

function useSearcher() {

    const searchValues = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) searchValues.push(`l=${checkbox.id.slice(2)}`);
    });

    if (searchInput.value !== "") searchValues.push(`q=${searchInput.value.replaceAll(" ", "%20")}`);

    fetch("/api/jeux?" + searchValues.join("&")).then((res) => res.json()).then((res) => {

        if(res.length === 0) footer.style.bottom = 0;
        else footer.style.bottom = null;

        while (cards.firstChild) cards.removeChild(cards.firstChild);

        res.forEach((jeu) => {
            cards.insertAdjacentHTML('beforeend', `
                <div class="card">
                    <div class="name">${jeu.name}</div>
                    <label class="cycle">${jeu.school_levels.join(", ")}</label>
                    <img src="${jeu.illustration}" alt="${jeu.name}" width="25%">
                    <span class="tags">${jeu.themes.join(", ")}</span>
                    <a href="${jeu.open_in_new_tab ? jeu.online_app_url : `/play/${jeu.id}`}"><button>Jouer</button></a>
                </div>
            `);
        });
    });
};

// const checkboxes = document.querySelectorAll(".search-checkbox input[type='checkbox']");
// const searchInput = document.querySelector("#search-name");
// const cards = document.querySelectorAll(".card");

// searchInput.addEventListener('input', (event) => {

//     let selectedCycle = null;
//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) selectedCycle = checkbox.nextElementSibling.textContent.split(" ")[1];
//     });

//     const searchTerm = event.target.value.toLowerCase();

//     cards.forEach((card) => {
//         const cardName = card.querySelector('.tags').textContent.toLowerCase();
//         const cardCycle = card.querySelector(".cycle").textContent;

//         if (selectedCycle) {
//             card.style.display = cardName.includes(searchTerm) && cardCycle.includes(selectedCycle) ? 'flex' : 'none';
//         } else {
//             card.style.display = cardName.includes(searchTerm) ? 'flex' : 'none';
//         }
//     });
// });