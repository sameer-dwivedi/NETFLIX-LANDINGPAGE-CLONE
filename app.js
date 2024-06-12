document.addEventListener('DOMContentLoaded', () => {
    let getstarted = document.getElementById('getstartedbtn');
    let error = document.getElementById('errormail');
    let email = document.getElementById('email');

    getstarted.addEventListener('click', () => {
        if (email.value.includes("@gmail.com")) {
            console.log("proceed");
        } else {
            error.style.top = "49%";
            error.style.left = "39%";
            error.style.display = "flex"; // Make sure error box is visible
            console.log("incorrect"); // Log message indicating incorrect email
        }
    });
    let errorresolve = document.getElementById('errorresolve')
    errorresolve.addEventListener('click', () => {
        error.style.top = "-80%";
        error.style.left = "40%";
    })
    let questions = document.getElementsByClassName('Questions');
    let answers = document.getElementsByClassName('answers');
    let addbtns = document.getElementsByClassName('bi bi-plus');
    console.log(addbtns);
    questions[0].addEventListener('click', () => {
        answers[0].classList.toggle("answersactive");
        let ico = questions[0].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    questions[1].addEventListener('click', () => {
        answers[1].classList.toggle("answersactive");
        let ico = questions[1].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    questions[2].addEventListener('click', () => {
        answers[2].classList.toggle("answersactive");
        let ico = questions[2].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    questions[3].addEventListener('click', () => {
        answers[3].classList.toggle("answersactive");
        let ico = questions[3].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    questions[4].addEventListener('click', () => {
        answers[4].classList.toggle("answersactive");
        let ico = questions[4].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    questions[5].addEventListener('click', () => {
        answers[5].classList.toggle("answersactive");
        let ico = questions[5].querySelector("i");
        ico.classList.toggle("bi-plus")
        ico.classList.toggle("bi-dash")
    })
    function getRandomNumber() {
        return Math.floor(1000 + Math.random() * 9000);
    }
   // Add an event listener to the "Get started" button
document.getElementById('getstartedbtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get the recipient's email
    const recipientEmail = document.getElementById('email').value;

    // Generate a random 4-digit number
    const randomnumber = getRandomNumber();

    // Create the mailto link with the recipient's email and the random number
    const mailtolink = `mailto:${recipientEmail}?subject=Your Random Number&body=Your random 4-digit number is: ${randomnumber}`;

    // Open the mail client with the mailto link
    window.location.href = mailtolink;
});

// Function to generate a random 4-digit number
function getRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}

});
