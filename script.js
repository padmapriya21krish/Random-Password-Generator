function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charset = "";
    if (includeUppercase) charset += uppercaseCharset;
    if (includeLowercase) charset += lowercaseCharset;
    if (includeNumbers) charset += numbersCharset;
    if (includeSymbols) charset += symbolsCharset;

    if (charset === "") {
        alert("Select at least one character set.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').innerText = password;
}
