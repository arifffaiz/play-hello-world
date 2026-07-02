// ===== App Entry Point =====

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// --- Theme Toggle ---
const themeToggle = $('#theme-toggle');
let currentTheme = localStorage.getItem('theme') || 'dark-bb-pastel';
document.documentElement.setAttribute('data-theme', currentTheme);

const themes = ['dark-bb-pastel', 'dark-nord', 'bb-pastel', 'nord'];
themeToggle.addEventListener('click', () => {
  const idx = themes.indexOf(currentTheme);
  currentTheme = themes[(idx + 1) % themes.length];
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
});

// --- Greeting ---
const nameInput = $('#name-input');
const greetBtn = $('#greet-btn');
const greetingText = $('#greeting-text');

function updateGreeting(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    greetingText.textContent = 'Hello, Hackathon!';
    return;
  }
  greetingText.textContent = `Hello, ${trimmed}!`;
}

greetBtn.addEventListener('click', () => {
  updateGreeting(nameInput.value);
});

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    updateGreeting(nameInput.value);
  }
});

// --- Counter ---
const counterEl = $('#counter');
const counterInc = $('#counter-inc');
const counterDec = $('#counter-dec');
const counterReset = $('#counter-reset');
const counterToast = $('#counter-toast');

let count = 0;

function renderCounter() {
  counterEl.textContent = count;
}

function showToast(msg) {
  counterToast.textContent = msg;
  counterToast.classList.remove('hidden');
  setTimeout(() => {
    counterToast.classList.add('hidden');
  }, 2000);
}

counterInc.addEventListener('click', () => {
  count += 1;
  renderCounter();
  showToast('Increased to ' + count);
});

counterDec.addEventListener('click', () => {
  count -= 1;
  renderCounter();
  showToast('Decreased to ' + count);
});

counterReset.addEventListener('click', () => {
  count = 0;
  renderCounter();
  showToast('Reset to 0');
});

renderCounter();

// --- Error Boundary Demo ---
const triggerError = $('#trigger-error');
const errorBoundary = $('#error-boundary');
const errorMessage = $('#error-message');
const dismissError = $('#dismiss-error');

function showError(msg) {
  console.error('Demo error:', msg);
  errorMessage.textContent = msg;
  errorBoundary.classList.remove('hidden');
}

function dismissErrorBanner() {
  errorBoundary.classList.add('hidden');
  errorMessage.textContent = '';
}

// Simulated async error handler
async function safeAsync(fn) {
  try {
    await fn();
  } catch (err) {
    showError(err.message || String(err));
  }
}

triggerError.addEventListener('click', () => {
  safeAsync(async () => {
    // This simulates an unhandled error — could be a failed API call, etc.
    throw new Error('Intentional demo error triggered at ' + new Date().toLocaleTimeString());
  });
});

dismissError.addEventListener('click', dismissErrorBanner);

// --- Footer Year ---
$('#year').textContent = new Date().getFullYear();
