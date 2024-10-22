# Event-Invitation

This is an Event Invite Application created using HTML, CSS, and JavaScript. It allows users to create event invitations by filling out an event form. Once submitted, the application displays the event details. The application also provides input validation to ensure that all fields are filled before submission.

1. Form Submission:
The event form collects details such as:
Event Name, Event Date, Start Time, End Time, Description, Location
Upon submission, an event listener attached to the form (submit event) is triggered. The form data is processed, and the event details are displayed.

2. Input Validation:
Validation: The application checks if all fields are filled. If any field is empty, the application displays an error message prompting the user to fill in all fields. The error message is displayed using a hidden <div> (errorMessage) which becomes visible when validation fails.
Message Display: If the fields are incomplete, the errorMessage is shown with a message: "Please fill in all fields". The user can dismiss the message by clicking the close button (X).

3. Displaying Event Details:
Once the form is submitted successfully (i.e., all fields are filled), the application hides the error message and uses the displayEventDetails() function to display the event invitation details in a formatted layout.
The details are displayed inside the eventDetails <div>, which includes:
Event Name
Event Date
Event Time (Start and End)
Location
Description
The displayed content includes a prominent heading: "You are invited!" in red text, followed by the event details.

4. Error Handling:
If the form is incomplete, the error message (errorMessage) is triggered and made visible. This message can be dismissed by clicking on the "X" button, which runs the closeMessage() function to hide the message.

addEventListener('submit'): Captures the form submission, validates input, and either displays the event details or shows an error message.

closeMessage(): Hides the error message when the user clicks the close button.

displayEventDetails(): Dynamically displays the entered event details in the eventDetails section.

HTML:
The HTML file defines the form layout and structure. It contains:
A form to collect event details with input fields for event name, date, time, description, and location.
A hidden error message section (#errorMessage) that becomes visible on form validation failure.
A hidden event details section (#eventDetails) that displays event information after successful form submission.

CSS:
The CSS styles the form and event details, providing:
A gradient background for the page.
Form styling including borders, shadows, and rounded corners.
Error message styling to ensure that it stands out and is easily dismissible.
Event details display with custom formatting for the invitation.

JavaScript:
The JavaScript file handles the core functionality, including:
Form Submission Handling: Captures form input and processes the submission.
Input Validation: Ensures that all fields are filled and displays an error message if not.
Displaying Event Details: Renders the event details dynamically in the event details section.
Error Message Dismissal: Allows users to dismiss the error message.
