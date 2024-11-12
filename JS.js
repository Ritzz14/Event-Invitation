document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;
  const description = document.getElementById('description').value;
  const location = document.getElementById('location').value;

  if (!eventName || !eventDate || !startTime || !endTime || !description || !location) {
      document.getElementById('errorMessage').style.display = 'flex';
      return;
  }

  document.getElementById('errorMessage').style.display = 'none';
  displayEventDetails(eventName, eventDate, startTime, endTime, description, location);
});
