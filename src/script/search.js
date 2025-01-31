console.log('Cliente bocó');
const searchInput = document.getElementById("search-input"); // referencia a input da barra de pesquisa
const resultArtists = document.getElementById("result-artist"); // referencia ao container dos artistas
const resultPlaylists = document.getElementById("result-playlists"); // referencia ao container das playlists
const gridContainer = document.getElementById('grid-container');
const originalCard = document.getElementById('original-card');
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    const url2 = `https://api.jsonbin.io/v3/qs/679bc6ffad19ca34f8f71902?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((results) => displayResults(results));
}

function displayResults(res) {
    resultPlaylists.classList.add('hidden');
    resultArtists.classList.remove('hidden');
    
    gridContainer.innerHTML = '';
   
    res.forEach(element => {
        // Clone the original card
        const newCard = originalCard.cloneNode(true);

        // Update the id of the cloned card (to avoid duplicate ids)
        newCard.id = element.id;

        // Update the image source
        const newCardImg = newCard.querySelector('.artist-img');
        newCardImg.src = element.urlImg;

        // Update the artist name
        const newCardName = newCard.querySelector('.artist-name');
        newCardName.textContent = element.name;

        // Update the artist category
        const newCardCategory = newCard.querySelector('.artist-categorie');
        newCardCategory.textContent = element.genre;

        // Update the link title and href
        const newCardLink = newCard.querySelector('.vst');
        newCardLink.title = element.name;
        newCardLink.href = `#${element.name.toLowerCase().replace(/\s+/g, '-')}`;

        // Append the new card to the container

        gridContainer.appendChild(newCard);
    });


}

document.addEventListener('input', () => {
    const searchVal = searchInput.value.toLowerCase();

    if (searchVal === '') {
        resultPlaylists.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(searchVal);
})