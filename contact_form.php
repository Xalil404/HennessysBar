<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email configuration
    $to = "kareemxalil@gmail.com"; // Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}

?>
