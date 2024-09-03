// Initialize Toast
function showToast() {
    const toastLiveExample = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
}

// Show Alert
function showAlert() {
    alert('This is a Bootstrap alert!');
}

// Update Range Slider Value
function updateRangeValue(value) {
    document.getElementById('rangeValue').innerText = value;
}

// Handle Form Submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been received.`);
    document.querySelector('form').reset();
}
