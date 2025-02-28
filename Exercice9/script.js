function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age < 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;