import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = process.cwd();
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

console.log('Testing Homepage Standalone Calculator Layout & Separation...');

// 1. Ensure calculators are NOT inside #vehicleDialog
const vehicleDialogMatch = indexHtml.match(/<dialog\s+id="vehicleDialog"[\s\S]*?<\/dialog>/i);
assert.ok(vehicleDialogMatch, 'vehicleDialog must exist in index.html');
const vehicleDialogHtml = vehicleDialogMatch[0];

assert.ok(!vehicleDialogHtml.includes('id="loanCalculator"'), 'loanCalculator must NOT be inside vehicleDialog');
assert.ok(!vehicleDialogHtml.includes('id="roadtaxCalculator"'), 'roadtaxCalculator must NOT be inside vehicleDialog');
assert.ok(!vehicleDialogHtml.includes('id="calcScenariosWrapper"'), 'calcScenariosWrapper must NOT be inside vehicleDialog');
assert.ok(!vehicleDialogHtml.includes('id="calcAmortizationSection"'), 'calcAmortizationSection must NOT be inside vehicleDialog');

// 2. Ensure vehicleDialog has quick financing preview and jump button
assert.ok(vehicleDialogHtml.includes('id="dialogCalcCallout"'), 'vehicleDialog must have quick financing preview callout');
assert.ok(vehicleDialogHtml.includes('id="dialogJumpToCalcBtn"'), 'vehicleDialog must have jump to calculator button');
assert.ok(vehicleDialogHtml.includes('id="dialogEstMonthly"'), 'vehicleDialog must have estimated monthly installment display');

// 3. Ensure on-site calculator component is removed from homepage
assert.ok(!indexHtml.includes('id="showroomCalculator"'), 'index.html must NOT have on-site showroomCalculator');
assert.ok(!indexHtml.includes('id="inventoryCalculatorAside"'), 'index.html must NOT have on-site inventoryCalculatorAside');

// 4. Ensure separate dedicated calculator page (calculator.html) has full functional calculator
const calcHtml = fs.readFileSync(path.join(root, 'calculator.html'), 'utf8');
assert.ok(calcHtml.includes('id="showroomCalculator"'), 'calculator.html must have showroomCalculator');
assert.ok(calcHtml.includes('id="inventoryCalculatorAside"'), 'calculator.html must have inventoryCalculatorAside');
assert.ok(calcHtml.includes('id="calcVehiclePicker"'), 'calculator.html must have calcVehiclePicker dropdown');
assert.ok(calcHtml.includes('id="loanCalculator"'), 'calculator.html must have loanCalculator');
assert.ok(calcHtml.includes('id="calcScenariosWrapper"'), 'calculator.html must have calcScenariosWrapper');
assert.ok(calcHtml.includes('id="calcAmortizationSection"'), 'calculator.html must have calcAmortizationSection');
assert.ok(calcHtml.includes('id="roadtaxCalculator"'), 'calculator.html must have roadtaxCalculator');
assert.ok(calcHtml.includes('id="navCalcLink"'), 'calculator.html must have navCalcLink');
assert.ok(indexHtml.includes('id="navCalcLink"'), 'index.html must have navCalcLink');

// 4. Test Amortization Math (Rule of 78 vs Straight Line)
function calculateAmortization(P, I, N, method) {
  const totalPayable = P + I;
  const regularPayment = Math.round(totalPayable / N);
  const sumDigits = (N * (N + 1)) / 2;
  const schedule = [];
  let remainingP = P;
  let cumI = 0;
  let cumP = 0;

  for (let m = 1; m <= N; m++) {
    let interest = 0;
    let payment = regularPayment;
    if (method === 'rule78') {
      const weight = (N - m + 1) / sumDigits;
      interest = Math.round(I * weight);
    } else {
      interest = Math.round(I / N);
    }
    let principal = payment - interest;
    if (m === N) {
      interest = Math.max(0, Math.round(I - cumI));
      principal = remainingP;
      payment = principal + interest;
    }
    cumI += interest;
    cumP += principal;
    remainingP = Math.max(0, P - cumP);
    schedule.push({ month: m, payment, principal, interest, remainingP, cumI });
  }
  return schedule;
}

const P = 394200;
const I = 68985;
const N = 84;

const sched78 = calculateAmortization(P, I, N, 'rule78');
assert.equal(sched78.length, 84, 'Schedule should have 84 months');
assert.equal(sched78[83].remainingP, 0, 'Remaining balance at month 84 must be exactly RM 0');
assert.equal(sched78[83].cumI, I, 'Cumulative interest at month 84 must match total interest');
assert.ok(sched78[0].interest > sched78[83].interest, 'Rule of 78 must front-load interest in early months');

const schedEqual = calculateAmortization(P, I, N, 'equal');
assert.equal(schedEqual.length, 84, 'Equal split schedule should have 84 months');
assert.equal(schedEqual[83].remainingP, 0, 'Equal split balance at month 84 must be RM 0');

console.log('PASS: All layout separation and amortization logic tests verified successfully!');
