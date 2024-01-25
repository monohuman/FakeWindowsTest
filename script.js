let baseX = 30; // Base X position (in percentage)
let baseY = 40; // Base Y position (in percentage)
let offsetX = 0; // X offset
let offsetY = 0; // Y offset

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // Check if there are any error messages currently displayed
        const existingErrors = document.querySelectorAll('img.error-message');
        if (existingErrors.length === 0) {
            // Reset offsets if no error messages are displayed
            offsetX = 0;
            offsetY = 0;
        }

        // Create a new error message element
        const errorMessage = document.createElement('img');
        errorMessage.src = 'errormessage.png';
        errorMessage.alt = 'Error Message';
        errorMessage.classList.add('error-message'); // Add a class for easy selection
        errorMessage.style.position = 'fixed';
        errorMessage.style.left = `calc(${baseX}% + ${offsetX}px)`;
        errorMessage.style.top = `calc(${baseY}% + ${offsetY}px)`;
        errorMessage.style.transform = 'translate(-50%, -50%)';

        // Append the error message to the body
        document.body.appendChild(errorMessage);

        // Update the offset for the next error message
        offsetX += 5;
        offsetY += 5;

        // Hide and remove the error message after 5 seconds
        setTimeout(() => {
            errorMessage.remove();
            // Check and reset offsets if no more error messages are present
            if (document.querySelectorAll('img.error-message').length === 0) {
                offsetX = 0;
                offsetY = 0;
            }
        }, 5000);
    });
});
