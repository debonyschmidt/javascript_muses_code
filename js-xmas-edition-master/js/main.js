const behaviour = document.letterToSanta.goodVSnaughty.value;

function nameValidationError(value) {

    if (value === "") {
        return ("Name is required");

    } else if (value.length < 2) {
        return ("The name sould be longer than 1 character.");

    } else if (value.length > 250) {
        return("The name cannot be longer than 250 characters.");

    } else if (/^[A-z]+$/.test(value) === false) {
        return("Please, enter only letters in the name field.");    
    }
        
}

function cityValidationError(value) {
    
    if (value == "") {
        return ("City is required");
        
    }
}

function descriptionValidationError(value) {

    if (value == ""){
        return ("Description is required");

    } else if (value.length < 2) {
        return ("The description sould be longer than 1 character.");

    } else if (value.length > 250) {
        return("The description cannot be longer than 250 characters.");

    } else if (/^[A-z0-9]+$/.test(value) === false) {
        return("Please, enter only letters in the name field.");    
    }
}
function validateForm(event) {
    const name = document.letterToSanta.name.value;
    const city = document.letterToSanta.city.value;
    const description = document.letterToSanta.description.value;
    
    const errors = {
        name: nameValidationError(name),
        city: cityValidationError(city),
        description: descriptionValidationError(description),
    };

    nameValidationError (name);
    cityValidationError(city);
    descriptionValidationError(description);

    handleErrors(errors);
    event.preventDefault();
}

function handleErrors(errors) {
    let errorsCount = 0;

    Object.keys(errors)
    .forEach(function (key) {
        console.log(errors[key]);
        errorsCount = errorsCount + errors[key].length;
    });

}




