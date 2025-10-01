function MortCalc() {

    const loanAmount = parseFloat(document.getElementById('LoanAmount').value);
    const loanTerm = parseInt(document.getElementById('LoanTerm').value);
    const monthlyIncome = parseFloat(document.getElementById('MonthlyIncome').value);

    if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(monthlyIncome)) {
        document.getElementById('result').innerHTML = `
        <p class='denied'>Values entered are invalid!</p>
        `;
        return;
    }

    const annualRate = 0.045; 
    const r = annualRate / 12; 
    const n = loanTerm * 12; 

    const monthlyPayment = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - loanAmount;
    const remainingIncome = monthlyIncome - monthlyPayment;

    const threshold = 0.3 * monthlyIncome;

    if (monthlyPayment > threshold) {
        document.getElementById('result').innerHTML = `
        <p class="denied">Loan denied: Monthly payment exceeds 30% of your income.</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p class="approved">Loan Approved: Full Breakdown</p>
            <p>Monthly Payment: £${monthlyPayment.toFixed(2)}</p>
            <p>Total Payment: £${totalPayment.toFixed(2)}</p>
            <p>Total Interest: £${totalInterest.toFixed(2)}</p>
            <p>Remaining Monthly Income: £${remainingIncome.toFixed(2)}</p>
            `;
    }
}