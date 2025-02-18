// Function to update a setting
function updateSetting() {
    const settingName = document.getElementById('settingName').value;
    const settingValue = document.getElementById('settingValue').value;

    if (settingName && settingValue) {
        alert(`Setting "${settingName}" updated to "${settingValue}"!`);
        document.getElementById('updateForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to remove a setting item from the list
function removeSetting(button) {
    const listItem = button.parentNode;
    const settingName = listItem.getAttribute('data-setting');

    if (confirm(`Are you sure you want to remove "${settingName}"?`)) {
        listItem.remove();
        alert(`Setting "${settingName}" has been removed.`);
    }
}
