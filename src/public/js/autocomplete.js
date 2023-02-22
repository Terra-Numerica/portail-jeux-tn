const checkboxes = document.querySelectorAll(".search-checkbox input[type='checkbox']");
const searchInput = document.querySelector("#search-name");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener('input', (event) => {

    let selectedCycle = null;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) selectedCycle = checkbox.nextElementSibling.textContent.split(" ")[1];
    });

    const searchTerm = event.target.value.toLowerCase();

    cards.forEach((card) => {
        const cardName = card.querySelector('.tags').textContent.toLowerCase();
        const cardCycle = card.querySelector(".cycle").textContent;

        if (selectedCycle) {
            card.style.display = cardName.includes(searchTerm) && cardCycle.includes(selectedCycle) ? 'flex' : 'none';
        } else {
            card.style.display = cardName.includes(searchTerm) ? 'flex' : 'none';
        }
    });
});

checkboxes.forEach((checkbox) => {

    checkbox.addEventListener("click", (event) => {
        if (event.target.checked) {
            checkboxes.forEach((checkbox) => {
                if (checkbox !== event.target) checkbox.checked = false;
            });
        };
    });

    checkbox.addEventListener("change", (event) => {
        searchInput.dispatchEvent(new Event("input"));
    });
});