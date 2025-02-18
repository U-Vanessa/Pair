// Sample data for demonstration
const locations = {
    western: {
        districts: ["Rubavu", "Rusizi", "Karongi"],
        sectors: {
            "Rubavu": ["Sector1", "Sector2"],
            "Rusizi": ["Sector3", "Sector4"],
            "Karongi": ["Sector5", "Sector6"]
        },
        cells: {
            "Sector1": ["Cell1", "Cell2"],
            "Sector2": ["Cell3", "Cell4"],
            "Sector3": ["Cell5", "Cell6"]
        },
        villages: {
            "Cell1": ["Village1", "Village2"],
            "Cell2": ["Village3", "Village4"]
        }
    },

    eastern: {
        districts: ["Bugesera", "Rwamagana", "Kayonza"],
        sectors: {
            "Bugesera": ["Sector1", "Sector2"],
            "Ruwamagana": ["Sector3", "Sector4"],
            "Kayonza": ["Sector5", "Sector6"]
        },
        cells: {
            "Sector1": ["Cell1", "Cell2"],
            "Sector2": ["Cell3", "Cell4"],
            "Sector3": ["Cell5", "Cell6"]
        },
        villages: {
            "Cell1": ["Village1", "Village2"],
            "Cell2": ["Village3", "Village4"]
        }
    },

    northern: {
        districts: ["Rulindo", "Musanze", "Gakenke"],
        sectors: {
            "Rulindo": ["Sector1", "Sector2"],
            "Musanze": ["Sector3", "Sector4"],
            "Gakenke": ["Sector5", "Sector6"]
        },
        cells: {
            "Sector1": ["Cell1", "Cell2"],
            "Sector2": ["Cell3", "Cell4"],
            "Sector3": ["Cell5", "Cell6"]
        },
        villages: {
            "Cell1": ["Village1", "Village2"],
            "Cell2": ["Village3", "Village4"]
        }
    },

    southern: {
        districts: ["Kamonyi", "Muhanga", "Ruhango", "Huye"],
        sectors: {
            "Kamonyi": ["Sector1", "Sector2"],
            "Muhanga": ["Sector3", "Sector4"],
            "Ruhango": ["Sector5", "Sector6"]
        },
        cells: {
            "Sector1": ["Cell1", "Cell2"],
            "Sector2": ["Cell3", "Cell4"],
            "Sector3": ["Cell5", "Cell6"]
        },
        villages: {
            "Cell1": ["Village1", "Village2"],
            "Cell2": ["Village3", "Village4"]
        }
    },

    kigali: {
        districts: ["Nyarugenge", "Gasabo", "Kicukiro"],
        sectors: {
            "Nyarugenge": ["Sector1", "Sector2"],
            "Gasabo": ["Sector3", "Sector4"],
            "Kicukiro": ["Sector5", "Sector6"]
        },
        cells: {
            "Sector1": ["Cell1", "Cell2"],
            "Sector2": ["Cell3", "Cell4"],
            "Sector3": ["Cell5", "Cell6"]
        },
        villages: {
            "Cell1": ["Village1", "Village2"],
            "Cell2": ["Village3", "Village4"]
        }
    },
    // Add other provinces similarly
};

// Populate districts based on selected province
function populateDistricts() {
    const province = document.getElementById("province").value;
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="" disabled selected>Select District</option>';
    
    if (locations[province]) {
        locations[province].districts.forEach(district => {
            const option = document.createElement("option");
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Populate sectors based on selected district
function populateSectors() {
    const province = document.getElementById("province").value;
    const district = document.getElementById("district").value;
    const sectorSelect = document.getElementById("sector");
    sectorSelect.innerHTML = '<option value="" disabled selected>Select Sector</option>';

    if (locations[province] && locations[province].sectors[district]) {
        locations[province].sectors[district].forEach(sector => {
            const option = document.createElement("option");
            option.textContent = sector;
            sectorSelect.appendChild(option);
        });
    }
}

// Populate cells based on selected sector
function populateCells() {
    const province = document.getElementById("province").value;
    const sector = document.getElementById("sector").value;
    const cellSelect = document.getElementById("cell");
    cellSelect.innerHTML = '<option value="" disabled selected>Select Cell</option>';

    if (locations[province] && locations[province].cells[sector]) {
        locations[province].cells[sector].forEach(cell => {
            const option = document.createElement("option");
            option.textContent = cell;
            cellSelect.appendChild(option);
        });
    }
}

// Populate villages based on selected cell
function populateVillages() {
    const province = document.getElementById("province").value;
    const cell = document.getElementById("cell").value;
    const villageInput = document.getElementById("village");

    if (locations[province] && locations[province].villages[cell]) {
        const villages = locations[province].villages[cell].join(", ");
        villageInput.value = villages;
    }
}
