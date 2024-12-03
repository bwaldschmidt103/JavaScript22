fetch('./JSON/tvshows.json')
    .then(response => response.json())
    .then(tvShows => {
        const tvShowsContainer = document.getElementById('tv-shows');

        tvShows.forEach(show => {
            const showDiv = document.createElement('div');
            showDiv.classList.add('tv-show');
            showDiv.innerHTML = `
                <h2>${show.name}</h2>
                <p><strong>Main Character:</strong> ${show.main_character}</p>
                <p><strong>Network:</strong> ${show.network}</p>
                <p><strong>Start Date:</strong> ${show.start_date}</p>
            `;
            tvShowsContainer.appendChild(showDiv);
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));