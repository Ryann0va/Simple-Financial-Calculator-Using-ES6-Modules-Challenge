//U99350821
// main.js
import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

// Interest Rate Calculation
document.getElementById('calculate-interest').addEventListener('click', () => {
  const principal = parseFloat(document.getElementById('principal-interest').value);
  const rate = parseFloat(document.getElementById('rate-interest').value);
  const time = parseFloat(document.getElementById('time-interest').value);
  
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById('interest-result').textContent = 'Please enter valid numbers';
    return;
  }

  const interest = calculateInterest(principal, rate, time);
  document.getElementById('interest-result').textContent = `Interest: $${interest.toFixed(2)}`;
});

// Loan Payment Calculation
document.getElementById('calculate-loan').addEventListener('click', () => {
  const principal = parseFloat(document.getElementById('principal-loan').value);
  const annualRate = parseFloat(document.getElementById('rate-loan').value);
  const numberOfPayments = parseInt(document.getElementById('payments-loan').value, 10);

  if (isNaN(principal) || isNaN(annualRate) || isNaN(numberOfPayments)) {
    document.getElementById('loan-result').textContent = 'Please enter valid numbers';
    return;
  }

  const payment = calculateLoanPayment(principal, annualRate, numberOfPayments);
  document.getElementById('loan-result').textContent = `Monthly Payment: $${payment.toFixed(2)}`;
});

// Investment Return Calculation
document.getElementById('calculate-investment').addEventListener('click', () => {
  const principal = parseFloat(document.getElementById('principal-investment').value);
  const rate = parseFloat(document.getElementById('rate-investment').value);
  const timesCompounded = parseInt(document.getElementById('times-compounded').value, 10);
  const years = parseFloat(document.getElementById('years-investment').value);

  if (isNaN(principal) || isNaN(rate) || isNaN(timesCompounded) || isNaN(years)) {
    document.getElementById('investment-result').textContent = 'Please enter valid numbers';
    return;
  }

  const returnAmount = calculateInvestmentReturn(principal, rate, timesCompounded, years);
  document.getElementById('investment-result').textContent = `Future Value: $${returnAmount.toFixed(2)}`;
});
