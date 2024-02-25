const citiesContainer = document.getElementById('cities');

fetch('https://api.npoint.io/7bbd3a59c401f616bb89')
  .then(response => response.json())
  .then(res=> {
    const data=res.places;
    data.forEach(city => {
      const cityCard = document.createElement('div');
      cityCard.classList.add('city-card');

      const cityImage = document.createElement('img');
      // Replace 'path/to/image.jpg' with the actual image path for each city
      cityImage.src = city.image;
    // http://127.0.0.1:5500/path/to/image.https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ2_JeusNcrtNqfcyBcIfHJqlzPZ_8569OcbLy6Gf-RhQYnHwoX5neDIRFoxmK4wzyeO0XLtE3UsveiQkcrxVd05T8DSIcZcHV0wwJJSXA.jpg
      cityImage.alt = `${city.name} City Image`;

      const cityName = document.createElement('h2');
      cityName.textContent = city.name;

      const state = document.createElement('p');
      state.textContent = `State: ${city.name}`;

      const population = document.createElement('p');
      population.textContent = `info: ${city.info}`;

      cityCard.appendChild(cityImage);
      cityCard.appendChild(cityName);
      cityCard.appendChild(state);
      cityCard.appendChild(population);

      citiesContainer.appendChild(cityCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error fetching city data.';
    citiesContainer.appendChild(errorMessage);
  });
