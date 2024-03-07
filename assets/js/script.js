/* Cocktail Generator */
document.addEventListener('DOMContentLoaded', function() {
    // List of cocktail image URLs
    const cocktailImages = [
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825269/Project%201/Screenshot_2024-03-07_at_3.23.22_PM_ctgtx9.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825269/Project%201/Screenshot_2024-03-07_at_3.19.43_PM_izjcwu.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825268/Project%201/Screenshot_2024-03-07_at_3.22.04_PM_v4mlke.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825265/Project%201/Screenshot_2024-03-07_at_3.19.24_PM_czheyb.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825265/Project%201/Screenshot_2024-03-07_at_3.18.56_PM_iuun95.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825262/Project%201/Screenshot_2024-03-07_at_3.21.54_PM_yddxgy.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825261/Project%201/Screenshot_2024-03-07_at_3.18.29_PM_w0hogv.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825261/Project%201/Screenshot_2024-03-07_at_3.18.42_PM_epoy2z.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825259/Project%201/Screenshot_2024-03-07_at_3.23.11_PM_satwr4.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825259/Project%201/Screenshot_2024-03-07_at_3.18.16_PM_t8spdk.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825258/Project%201/Screenshot_2024-03-07_at_3.21.18_PM_b6te3p.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825254/Project%201/Screenshot_2024-03-07_at_3.20.28_PM_pydsav.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825253/Project%201/Screenshot_2024-03-07_at_3.20.58_PM_wu0ecq.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825253/Project%201/Screenshot_2024-03-07_at_3.23.02_PM_aayrw4.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825252/Project%201/Screenshot_2024-03-07_at_3.22.49_PM_hhtm9s.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825251/Project%201/Screenshot_2024-03-07_at_3.20.47_PM_rmd9gt.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825249/Project%201/Screenshot_2024-03-07_at_3.20.10_PM_m2pnhw.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825242/Project%201/Screenshot_2024-03-07_at_3.22.40_PM_shbs7u.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825229/Project%201/Screenshot_2024-03-07_at_3.22.28_PM_urvyqy.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825215/Project%201/Screenshot_2024-03-07_at_3.22.14_PM_hjk9jy.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825201/Project%201/Screenshot_2024-03-07_at_3.25.23_PM_he5nly.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825187/Project%201/Screenshot_2024-03-07_at_3.24.41_PM_admbtg.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825173/Project%201/Screenshot_2024-03-07_at_3.24.02_PM_voksxt.png',
        'https://res.cloudinary.com/dugcwv1mf/image/upload/v1709825266/Project%201/Screenshot_2024-03-07_at_3.19.10_PM_oimskg.png'
    ];
    
    // Function to close the popup
    function closePopup() {
        document.getElementById('cocktailPopup').style.display = 'none';
    }

    document.getElementById('generateCocktailBtn').addEventListener('click', function() {
        // Randomly select a cocktail image URL from the list
        const randomIndex = Math.floor(Math.random() * cocktailImages.length);
        const randomCocktailImage = cocktailImages[randomIndex];

        // Set the selected cocktail image URL as the source of the image in the popup
        document.getElementById('cocktailImage').src = randomCocktailImage;

        // Display the popup
        document.getElementById('cocktailPopup').style.display = 'block';
    });

    // Event listener for the close button
    document.getElementById('closePopupBtn').addEventListener('click', function() {
        closePopup();
    });
});


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

