console.log('Cliente bocó');
const searchInput = document.getElementById("search-input"); // referencia a input da barra de pesquisa
const resultArtists = document.getElementById("result-artist"); // referencia ao container dos artistas
const resultPlaylists = document.getElementById("result-playlists"); // referencia ao container das playlists

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    const url2 = `https://api.jsonbin.io/v3/qs/679bc6ffad19ca34f8f71902?name_like=${searchTerm}`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => displayResults(results));
}

function displayResults(res){
    resultPlaylists.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    res.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchVal = searchInput.value.toLowerCase();
    console.log(searchVal === '');
    if (searchVal === '') {
        resultPlaylists.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(searchVal);
})