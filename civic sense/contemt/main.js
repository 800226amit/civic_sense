// Add an event listener to the form's submit button
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent the default form submission behavior
    
    // Get the form inputs
    const firstName = document.querySelector('input[type="text"][placeholder="Enter your First name"]').value;
    const middleName1 = document.querySelector('input[type="text"][placeholder="Enter your Middle name"]:nth-of-type(1)').value;
    const middleName2 = document.querySelector('input[type="text"][placeholder="Enter your Middle name"]:nth-of-type(2)').value;
    const email = document.querySelector('input[type="email"][placeholder="Enter Email id"]').value;
    const gender = document.querySelector('input[type="radio"][name="gender"]:checked').value;
    const dob = document.querySelector('input[type="date"]').value;
    
    // Do something with the form inputs, such as sending them to the server using AJAX or updating the DOM
    console.log(`First Name: ${firstName}`);
    console.log(`Middle Name 1: ${middleName1}`);
    console.log(`Middle Name 2: ${middleName2}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`Date of Birth: ${dob}`);
  });