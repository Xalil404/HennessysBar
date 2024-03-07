// Function to submit contact form
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Compose email body
    var subject = "Hennessy's Bar Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message;

    // Create mailto link
    var mailtoLink = "mailto:thebargetralee@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;
}
