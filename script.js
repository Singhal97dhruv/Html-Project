document.addEventListener('DOMContentLoaded', function() {
    fetch('images.json')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.querySelector('.cardContainer');
        for (let i = 0; i < 25; i++) {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${data[i].imageSrc}" alt="${data[i].imageAlt}" />
            <h3>${data[i].doctorName}</h3>
            <h5>${data[i].specialization}</h5>
          `;
          cardContainer.appendChild(card);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  