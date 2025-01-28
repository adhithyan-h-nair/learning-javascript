
function genPass() {
    const passLength = document.getElementById("passLength").value;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const result = document.getElementById("result");

    
    const smallAlphabets = "abcdefghijklmnopqrstuvwxyz";
    const bigAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789"
    const symbols = "!@#$%&*^?"

    let acceptedChars = "";
    let password = "";

    if (passLength >= 8) {
        acceptedChars += includeLowercase ? smallAlphabets : '';
        acceptedChars += includeUppercase ? bigAlphabets : '';
        acceptedChars += includeNumbers ? numbers : '';
        acceptedChars += includeSymbols ? symbols : '';
        if (acceptedChars.length === 0) {
            result.textContent = `Select atleast one option`;
        }
        else {
            for (let i = 0; i < passLength; i++) {
                let randomIndex = Math.floor(Math.random() * acceptedChars.length);
                password += acceptedChars.charAt(randomIndex);
            }
            result.textContent = `${password}`;
        }
    }
    else {
        result.textContent = `Password length must be atleast 8 characters`
    }

}