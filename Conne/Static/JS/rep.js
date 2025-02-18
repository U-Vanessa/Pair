// Sample data for reports
const customerData = [
    { date: "2024-11-01", command: "Order #101", location: "Kigali", status: "complete", deadline: "2024-11-05" },
    { date: "2024-11-02", command: "Order #102", location: "Musanze", status: "incomplete", deadline: "2024-11-06" },
  ];
  
  const farmerData = [
    { date: "2024-11-03", command: "Harvest #202", location: "Huye", status: "complete", deadline: "2024-11-07" },
    { date: "2024-11-04", command: "Planting #203", location: "Rwamagana", status: "denied", deadline: "2024-11-10" },
  ];
  
  const supplierData = [
    { date: "2024-11-05", command: "Supply #301", location: "Nyagatare", status: "incomplete", deadline: "2024-11-08" },
    { date: "2024-11-06", command: "Delivery #302", location: "Rubavu", status: "complete", deadline: "2024-11-09" },
  ];
  
  // Function to populate data into a table
  function populateTable(data, tableId) {
    const tableBody = document.getElementById(tableId).querySelector("tbody");
  
    data.forEach((entry) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${entry.date}</td>
        <td>${entry.command}</td>
        <td>${entry.location}</td>
        <td class="status ${entry.status}">${entry.status}</td>
        <td>${entry.deadline}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Populate all tables
  document.addEventListener("DOMContentLoaded", () => {
    populateTable(customerData, "customer-table");
    populateTable(farmerData, "farmer-table");
    populateTable(supplierData, "supplier-table");
  });
  