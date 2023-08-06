
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


fetchData('http://localhost:3000/meals')
  .then(mealsData => {
    
    const mealsList = document.getElementById('meals-list');
    mealsData.forEach(meal => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${meal.name}</h3>
        <strong>Food Items:</strong>
        <ul>
          ${meal.foodItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <strong>Instructions:</strong>
        <ol>
          ${meal.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>
        <hr>
      `;
      mealsList.appendChild(li);
    });
  });
