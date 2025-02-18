// Fetch Data from Flask
document.getElementById("fetchData").addEventListener("click", async () => {
    try {
        const response = await fetch("/api/data"); // Call Flask API
        const data = await response.json(); // Convert response to JSON
        document.getElementById("response").innerText = JSON.stringify(data); // Display data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

// Send Data to Flask
document.getElementById("sendData").addEventListener("click", async () => {
    const userData = { name: "John Doe", age: 30 }; // Example data
    try {
        const response = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData), // Send JSON data
        });
        const data = await response.json(); // Convert response to JSON
        console.log("Response from Flask:", data); // Log response
    } catch (error) {
        console.error("Error sending data:", error);
    }
});
