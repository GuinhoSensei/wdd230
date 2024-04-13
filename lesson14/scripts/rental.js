window.addEventListener('DOMContentLoaded', () => {
    const rentalGrid = document.querySelector('.rental-grid');

    fetch('data/rentals.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch rental data');
            }
            return response.json();
        })
        .then(data => {
            data.rentals.forEach(rental => {
                const rentalItem = document.createElement('div');
                rentalItem.classList.add('rental-item');

                rentalItem.innerHTML = `
                    <img src="${rental.image}" alt="${rental.name}">
                    <h3>${rental.name}</h3>
                    <ul>
                        ${rental.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <table>
                        <tr>
                            <th>Duration</th>
                            <th>Price (USD)</th>
                        </tr>
                        <tr>
                            <td>Half Day</td>
                            <td>${rental.prices.half_day.min} - ${rental.prices.half_day.max}</td>
                        </tr>
                        <tr>
                            <td>Full Day</td>
                            <td>${rental.prices.full_day.min} - ${rental.prices.full_day.max}</td>
                        </tr>
                    </table>
                `;

                rentalGrid.appendChild(rentalItem);
            });
        })
        .catch(error => {
            console.error('Error fetching rental data:', error.message);
        });
});
