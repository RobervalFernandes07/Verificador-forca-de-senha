const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.querySelector("#password-strength-indicator");
    const strengthText = document.querySelector("#password-strength-text");

    const strength = {
        0: "Muito fraca",
        1: "Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito forte",
    };

    let score = 0;

   
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;

    // Calculo da largura da barra
    const width = (score / 4) * 100;
    strengthIndicator.style.width = `${width}%`;

   
    strengthIndicator.classList.remove("weak", "medium", "strong", "very-strong");

    
    if (score === 1) strengthIndicator.classList.add("weak");
    if (score === 2) strengthIndicator.classList.add("medium");
    if (score === 3) strengthIndicator.classList.add("strong");
    if (score === 4) strengthIndicator.classList.add("very-strong");

    
    if (password.length > 0 && score in strength) {
        strengthText.innerHTML = `Força: ${strength[score]}`;
    } else {
        strengthText.innerHTML = "Força: Muito fraca";
    }
});
