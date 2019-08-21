const city = document.letterToSanta.city.value;
const behaviour = document.letterToSanta.goodVSnaughty.value;
const description = document.letterToSanta.description.value;

function nameValidationError (value) {

    if (value === "") {
        return ("Name is required");

    } else if (value.length < 2) {
        return ("This field sould be longer than 1 character.");

    } else if (value.length > 250) {
        return("This field cannot be longer than 250 characters.");

    } else if (/^[A-z]+$/.test(value) === false) {
        return("Please, enter only letters in the name field.");    
    }
        return "";
}

function validateForm(event) {
    const name = document.letterToSanta.name.value;
    nameValidationError (name);
    console.log(nameValidationError(name));
    event.preventDefault();
}


