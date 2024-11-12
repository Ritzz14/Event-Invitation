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
function displayEventDetails(name, date, start, end, desc, location) {
  const eventDetails = document.getElementById('eventDetails');
  eventDetails.innerHTML = `
    <p style="color: red; font-size: 24px;">You are invited!</p>
    <h2>${name}</h2>
    <p><strong> ${date}</strong></p>
    <p><strong> ${start} - ${end}</strong></p>
    <p><strong> ${location}</strong></p>
    <p><strong> ${desc}</strong></p>
  `;
  eventDetails.style.display = 'block';
}
