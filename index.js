document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.handle_event');
    button.addEventListener('click', async function () {
        try {
            const response = await fetch('https://learn.angelsonearthhub.com/web/apps/e2445eeb-3c9f-49a7-8c1a-b3879d8149c2');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json(); // Parse JSON data if the response is JSON
            console.log('Fetched Data:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
