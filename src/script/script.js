console.log('Cliente bocó');
const searchInput = document.getElementById("search-input"); // referencia a input da barra de pesquisa
const resultArtists = document.getElementById("result-artist"); // referencia ao container dos artistas
const resultPlaylists = document.getElementById("result-playlists"); // referencia ao container das playlists
function requestApi(searchVal) {
    const url = 'http://localhost:3000/artists';
    fetch(url)
}

document.addEventListener('input', () => {
    const searchVal = searchInput.value.toLowerCase;
    if (searchVal === '') {
        resultPlaylists.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
})