function calculateSIP() {
    let monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let investmentPeriod = parseFloat(document.getElementById("investmentPeriod").value);

    if (isNaN(monthlyInvestment) || isNaN(interestRate) || isNaN(investmentPeriod)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    let months = investmentPeriod * 12;
    let monthlyRate = (interestRate / 100) / 12;

    // Future value formula for SIP
    let maturityAmount = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    let totalInvestment = monthlyInvestment * months;
    let estimatedReturns = maturityAmount - totalInvestment;

    document.getElementById("totalInvestment").textContent = totalInvestment.toFixed(2);
    document.getElementById("maturityAmount").textContent = maturityAmount.toFixed(2);
}
