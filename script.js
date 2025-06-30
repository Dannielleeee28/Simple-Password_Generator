function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("lowerCase").checked;
    const includeUppercase = document.getElementById("upperCase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "~!@#$%^&*()_";

    let fromPreferences = "";
    let password = "";

    fromPreferences += includeLowercase ? lowercaseChars : "";
    fromPreferences += includeUppercase ? uppercaseChars : "";
    fromPreferences += includeNumbers ? numberChars : "";
    fromPreferences += includeSymbols ? symbolChars : "";

    if (passwordLength <= 0) {
        alert("Password length must be at least 1.");
        return;
    }

    if (fromPreferences === "") {
        alert("Please select at least one character type.");
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * fromPreferences.length);
        password += fromPreferences[randomIndex];
    }

    document.getElementById("generatedPassword-box").innerText = password;
}

