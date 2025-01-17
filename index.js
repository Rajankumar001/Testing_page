document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.handle_event');
    button.addEventListener('click', async function () {
        try {
            // Fetch the data from the URL
            const response = await fetch('https://learn.angelsonearthhub.com/web/apps/e2445eeb-3c9f-49a7-8c1a-b3879d8149c2');

            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response (assuming it's JSON)
            const data = await response.json();
            console.log('Fetched Data:', data);

            // Redirect to the specified URL
            window.location.href = 'https://learn.angelsonearthhub.com/web/apps/e2445eeb-3c9f-49a7-8c1a-b3879d8149c2';
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
