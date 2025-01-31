const cardContainer = document.getElementById("cardsContainer");
function cardsData() {
    fetch('http://localhost:3000/cards') // Replace with your API endpoint
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        createCards(data); // Call the function to create cards
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


function createCards(data) {

    console.log(cardsContainer);
    cardsContainer.innerHTML = '';
    data.forEach(item => {
          // Create the card structure
          const card = document.createElement('a');
          card.href = `#`; // Add a link if needed
          const cardId = "cardbg" + item.id;
          card.classList.add('cards');

          const cardContent = document.createElement('div');
          cardContent.classList.add('cards', cardId);

          const img = document.createElement('img');
          img.src = item.urlImg;
          img.alt = item.name;

          const span = document.createElement('span');
          span.textContent = item.name;

          // Append elements to the card
          cardContent.appendChild(img);
          cardContent.appendChild(span);
          card.appendChild(cardContent);

          // Append the card to the container
          cardsContainer.appendChild(card);
    });
}
cardsData();