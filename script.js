function updateValue(slider, id, suffix = '') {
    document.getElementById(id).textContent = `₹ ${slider.value}${suffix}`;
    calculateSIP();
}

function calculateSIP() {
    let monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let investmentPeriod = parseFloat(document.getElementById("investmentPeriod").value);

    let months = investmentPeriod * 12;
    let monthlyRate = (interestRate / 100) / 12;

    let maturityAmount = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    let totalInvestment = monthlyInvestment * months;
    let totalReturns = maturityAmount - totalInvestment;

    document.getElementById("totalInvestment").textContent = totalInvestment.toFixed(2);
    document.getElementById("totalReturns").textContent = totalReturns.toFixed(2);
    document.getElementById("totalValue").textContent = maturityAmount.toFixed(2);

    updateChart(totalInvestment, totalReturns);
}

// Chart.js for Pie Chart
let ctx = document.getElementById("investmentChart").getContext("2d");
let investmentChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Total Investment", "Total Returns"],
        datasets: [{
            data: [0, 0],
            backgroundColor: ["#a6c8ff", "#624de3"]
        }]
    },
});

function updateChart(investment, returns) {
    investmentChart.data.datasets[0].data = [investment, returns];
    investmentChart.update();
}

// Initial Calculation
calculateSIP();
