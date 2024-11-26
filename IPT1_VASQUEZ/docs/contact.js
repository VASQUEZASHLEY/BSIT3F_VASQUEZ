function greet() {

    const emailInput = document.getElementById('email'); 
    const email = emailInput.value.trim();


    if (email === "") { 
        alert ("invalid");

        return;
    }

    alert("Thank you for Subscribing!");

}