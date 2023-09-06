// Get all the .row-2 elements
const rowElements = document.querySelectorAll('.row-2');

// Get references to the playerName and playerScore elements in section-4
const playerNameElement = document.getElementById('playerName');
const playerScoreElement = document.getElementById('playerScore');

// Sample player data for each server (you can replace this with your data)
const playerDataServer1 = [
    { name: 'Legacy', score: 100 },
    { name: 'Kodu', score: 200 },
];

const playerDataServer2 = [
    { name: 'pavv', score: 300 },
    { name: 'Maani', score: 400 },
    { name: 'gangaa', score: 500 },
];

// Add a click event listener to each .row-2 element
rowElements.forEach((row, index) => {
    row.addEventListener('click', () => {
        // Remove 'clicked' class from the previously active row (if any)
        rowElements.forEach((row) => {
            row.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked row to change the styles
        row.classList.add('clicked');

        // Clear previous content
        playerNameElement.innerHTML = '';
        playerScoreElement.innerHTML = '';

        // Update the playerName and playerScore elements in section-4
        const playerData = index === 0 ? playerDataServer1 : playerDataServer2;
        const numPlayers = playerData.length;

        playerNameElement.appendChild(document.createTextNode(`Players (${numPlayers}):`));
        playerScoreElement.appendChild(document.createTextNode('Score:'));

        for (let i = 0; i < numPlayers; i++) {
            const playerElement = document.createElement('div');
            playerElement.textContent = `${playerData[i].name}: ${playerData[i].score}`;
            playerScoreElement.appendChild(playerElement);
        }
    });
});
