let toastMessage = "Default toast message"; // Initial toast message

        // Function to update the toast message
        const updateToastMessage = () => {
            const newMessage = document.getElementById("toastInput").value;
            if (newMessage.trim() !== "") {
                toastMessage = newMessage;
                showToast("Toast message updated: " + toastMessage);
            }
        };

        // Function to display the toast message
        const showToast = (content) => {
            const toastContainer = document.getElementById("toastContainer");
            toastContainer.textContent = content;
            toastContainer.style.display = "block"; // Show the toast container
            setTimeout(() => {
                toastContainer.style.display = "none"; // Hide the toast container after 3 seconds
            }, 3000);
        };
