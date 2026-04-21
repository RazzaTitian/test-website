const loginView = document.getElementById('login-view');
const roleView = document.getElementById('role-view');
const developerView = document.getElementById('developer-view');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const roleTitle = document.getElementById('role-title');
const roleDescription = document.getElementById('role-description');
const logoutBtn = document.getElementById('logout-btn');
const devLogoutBtn = document.getElementById('dev-logout-btn');
const newPuzzleBtn = document.getElementById('new-puzzle-btn');
const keyGrid = document.getElementById('key-grid');
const puzzleStatus = document.getElementById('puzzle-status');

const basicRoles = {
  user: { password: 'dummy', title: 'User Dashboard', description: 'Signed in as User.' },
  admin: { password: 'dummy', title: 'Admin Dashboard', description: 'Signed in as Admin.' },
  superadmin: { password: 'dummy', title: 'Superadmin Dashboard', description: 'Signed in as Superadmin.' }
};

const developerCredential = { username: 'guess', password: 'limbo' };

let puzzleState = null;

function secureRandomInt(maxExclusive) {
  if (maxExclusive <= 0) return 0;
  const maxUint = 0xffffffff;
  const threshold = maxUint - (maxUint % maxExclusive);
  const randomBuffer = new Uint32Array(1);

  while (true) {
    crypto.getRandomValues(randomBuffer);
    if (randomBuffer[0] < threshold) {
      return randomBuffer[0] % maxExclusive;
    }
  }
}

function secureShuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = secureRandomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomUniqueColors(count) {
  const hues = Array.from({ length: count }, (_, i) => Math.floor((360 / count) * i));
  const shuffledHues = secureShuffle(hues);
  return shuffledHues.map((h) => `hsl(${h}, 80%, 52%)`);
}

function setView(view) {
  loginView.classList.toggle('hidden', view !== 'login');
  roleView.classList.toggle('hidden', view !== 'role');
  developerView.classList.toggle('hidden', view !== 'developer');
}

function clearMessages() {
  loginMessage.textContent = '';
  loginMessage.className = 'message';
  puzzleStatus.textContent = '';
  puzzleStatus.className = 'message';
}

function handleLogin(event) {
  event.preventDefault();
  clearMessages();

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  if (username === developerCredential.username && password === developerCredential.password) {
    setView('developer');
    buildDeveloperPuzzle();
    return;
  }

  const role = basicRoles[username];
  if (role && password === role.password) {
    roleTitle.textContent = role.title;
    roleDescription.textContent = role.description;
    setView('role');
    return;
  }

  loginMessage.textContent = 'Invalid credentials. Try the demo credentials or discover the secret role.';
  loginMessage.classList.add('error');
}

function buildDeveloperPuzzle() {
  clearMessages();
  keyGrid.innerHTML = '';

  const keyIds = Array.from({ length: 16 }, (_, i) => `Key-${i + 1}`);
  const initialOrder = secureShuffle(keyIds);
  const targetIndex = secureRandomInt(initialOrder.length);
  const targetId = initialOrder[targetIndex];

  initialOrder.forEach((id) => {
    const keyButton = document.createElement('button');
    keyButton.type = 'button';
    keyButton.className = 'key';
    keyButton.dataset.keyId = id;
    keyButton.dataset.label = id;
    keyButton.disabled = true;
    keyButton.style.backgroundColor = id === targetId ? '#22c55e' : '#fbbf24';
    keyGrid.appendChild(keyButton);
  });

  puzzleStatus.textContent = 'Memorize the highlighted key... shuffling now.';

  setTimeout(() => {
    const shuffledOrder = secureShuffle(initialOrder);
    const colors = randomUniqueColors(16);

    keyGrid.innerHTML = '';

    shuffledOrder.forEach((id, index) => {
      const keyButton = document.createElement('button');
      keyButton.type = 'button';
      keyButton.className = 'key';
      keyButton.dataset.keyId = id;
      keyButton.dataset.label = id;
      keyButton.style.backgroundColor = colors[index];
      keyGrid.appendChild(keyButton);
    });

    puzzleState = {
      targetId,
      solved: false
    };

    puzzleStatus.textContent = 'Pick the key that used to be green.';
  }, 1300);
}

function handleKeyPick(event) {
  const keyButton = event.target.closest('.key');
  if (!keyButton || !puzzleState || puzzleState.solved) return;

  const pickedId = keyButton.dataset.keyId;

  if (pickedId === puzzleState.targetId) {
    puzzleState.solved = true;
    puzzleStatus.textContent = `Correct. ${pickedId} was the original green key.`;
    puzzleStatus.classList.add('success');
    return;
  }

  puzzleStatus.textContent = `Wrong key. You picked ${pickedId}. Try a new puzzle.`;
  puzzleStatus.classList.add('error');
}

function resetToLogin() {
  loginForm.reset();
  puzzleState = null;
  clearMessages();
  setView('login');
}

loginForm.addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', resetToLogin);
devLogoutBtn.addEventListener('click', resetToLogin);
newPuzzleBtn.addEventListener('click', buildDeveloperPuzzle);
keyGrid.addEventListener('click', handleKeyPick);

setView('login');
