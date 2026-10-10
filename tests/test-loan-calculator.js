import assert from 'node:assert/strict';

// Mock localStorage and minimal DOM to test loan scenarios logic
const mockStorage = new Map();
global.localStorage = {
  getItem: (key) => mockStorage.has(key) ? mockStorage.get(key) : null,
  setItem: (key, val) => mockStorage.set(key, String(val)),
  removeItem: (key) => mockStorage.delete(key),
  clear: () => mockStorage.clear()
};

const MAX_LOAN_SCENARIOS = 3;
const LOAN_SCENARIO_STORAGE_KEY_PREFIX = 'recon_loan_scenarios_';

let currentVehicle = { id: 'audi-s5', price: 'RM 438,000' };

function getLoanScenarioStorageKey() {
  const vid = (currentVehicle && currentVehicle.id) ? currentVehicle.id : 'global';
  return `${LOAN_SCENARIO_STORAGE_KEY_PREFIX}${vid}`;
}

function loadSavedLoanScenarios() {
  try {
    const raw = localStorage.getItem(getLoanScenarioStorageKey());
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, MAX_LOAN_SCENARIOS);
  } catch (err) {
    return [];
  }
}

function persistLoanScenarios(scenarios) {
  localStorage.setItem(getLoanScenarioStorageKey(), JSON.stringify(scenarios.slice(0, MAX_LOAN_SCENARIOS)));
}

function saveScenarioHelper(state) {
  let scenarios = loadSavedLoanScenarios();
  const existingIndex = scenarios.findIndex(s =>
    s.tenureYears === state.tenureYears &&
    Math.abs(s.ratePct - state.ratePct) < 0.01 &&
    Math.abs(s.downPaymentPct - state.downPaymentPct) < 0.01 &&
    Math.abs(s.price - state.price) < 1
  );

  if (existingIndex >= 0) {
    scenarios.splice(existingIndex, 1);
  }

  const newScenario = {
    id: 'scen_' + Math.random().toString(36).slice(2, 8),
    ...state,
    timestamp: Date.now()
  };

  scenarios.unshift(newScenario);
  scenarios = scenarios.slice(0, MAX_LOAN_SCENARIOS);
  persistLoanScenarios(scenarios);
  return newScenario;
}

function deleteScenarioHelper(id) {
  let scenarios = loadSavedLoanScenarios();
  scenarios = scenarios.filter(s => s.id !== id);
  persistLoanScenarios(scenarios);
}

function clearAllHelper() {
  localStorage.removeItem(getLoanScenarioStorageKey());
}

// TEST 1: Initial state is empty
assert.equal(loadSavedLoanScenarios().length, 0, 'Initial saved scenarios should be empty');

// TEST 2: Add scenario 1
const s1 = saveScenarioHelper({ price: 438000, downPaymentPct: 10, tenureYears: 7, ratePct: 2.5, monthlyInstallment: 4450 });
let list = loadSavedLoanScenarios();
assert.equal(list.length, 1);
assert.equal(list[0].tenureYears, 7);
assert.equal(list[0].monthlyInstallment, 4450);

// TEST 3: Add scenario 2
const s2 = saveScenarioHelper({ price: 438000, downPaymentPct: 10, tenureYears: 5, ratePct: 2.5, monthlyInstallment: 6050 });
list = loadSavedLoanScenarios();
assert.equal(list.length, 2);
assert.equal(list[0].tenureYears, 5);
assert.equal(list[1].tenureYears, 7);

// TEST 4: Add scenario 3
const s3 = saveScenarioHelper({ price: 438000, downPaymentPct: 10, tenureYears: 9, ratePct: 2.8, monthlyInstallment: 3741 });
list = loadSavedLoanScenarios();
assert.equal(list.length, 3);
assert.equal(list[0].tenureYears, 9);
assert.equal(list[1].tenureYears, 5);
assert.equal(list[2].tenureYears, 7);

// TEST 5: Add scenario 4 (should evict oldest scenario so max 3 are kept)
const s4 = saveScenarioHelper({ price: 438000, downPaymentPct: 10, tenureYears: 3, ratePct: 2.2, monthlyInstallment: 9780 });
list = loadSavedLoanScenarios();
assert.equal(list.length, 3, 'Scenarios list must never exceed 3 items');
assert.equal(list[0].tenureYears, 3);
assert.equal(list[1].tenureYears, 9);
assert.equal(list[2].tenureYears, 5);

// TEST 6: Re-selecting/saving an existing setup moves it to the top without increasing count
saveScenarioHelper({ price: 438000, downPaymentPct: 10, tenureYears: 5, ratePct: 2.5, monthlyInstallment: 6050 });
list = loadSavedLoanScenarios();
assert.equal(list.length, 3);
assert.equal(list[0].tenureYears, 5, 'Duplicate setup must move to front');

// TEST 7: Delete individual scenario
deleteScenarioHelper(list[0].id);
list = loadSavedLoanScenarios();
assert.equal(list.length, 2);

// TEST 8: Clear all scenarios
clearAllHelper();
assert.equal(loadSavedLoanScenarios().length, 0);

console.log('ALL LOAN CALCULATOR SCENARIO TESTS PASSED!');
