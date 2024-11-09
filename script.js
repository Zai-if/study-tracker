document.getElementById('study-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on submit

    // Get values from form inputs
    const subject = document.getElementById('subject').value;
    const time = document.getElementById('time').value;

    // Create a new list item
    const sessionItem = document.createElement('li');
    sessionItem.textContent = `${subject} - ${time} hours`;

    // Add the new item to the session list
    document.getElementById('session-list').appendChild(sessionItem);

    // Clear form inputs
    document.getElementById('subject').value = '';
    document.getElementById('time').value = '';
});

