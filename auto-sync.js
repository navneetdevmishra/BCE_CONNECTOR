const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DEBOUNCE_MS = 3000; // Wait 3 seconds after last file change before pushing
let pushTimeout = null;
let isPushing = false;

function getTimestamp() {
  const now = new Date();
  return now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

function runGitCommand(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT_DIR, encoding: 'utf8', stdio: 'pipe' }).trim();
  } catch (err) {
    if (err.stdout) console.log(err.stdout);
    if (err.stderr) console.error(err.stderr);
    return null;
  }
}

function syncToGithub() {
  if (isPushing) return;
  isPushing = true;

  try {
    const status = runGitCommand('git status --porcelain');
    if (!status) {
      console.log(`[${getTimestamp()}] ℹ️ No changes detected. Working tree clean.`);
      isPushing = false;
      return;
    }

    console.log(`\n[${getTimestamp()}] 🚀 Changes detected! Auto-pushing to GitHub...`);
    console.log(status);

    runGitCommand('git add .');
    const commitMsg = `Auto Update: ${getTimestamp()}`;
    runGitCommand(`git commit -m "${commitMsg}"`);
    console.log(`[${getTimestamp()}] 📦 Changes committed: "${commitMsg}"`);

    console.log(`[${getTimestamp()}] ⬆️ Pushing to origin/main...`);
    const pushResult = runGitCommand('git push origin main');
    console.log(`[${getTimestamp()}] ✅ Successfully pushed to GitHub! GitHub Actions will now deploy live.`);
  } catch (err) {
    console.error(`[${getTimestamp()}] ❌ Auto-push error:`, err.message);
  } finally {
    isPushing = false;
  }
}

const args = process.argv.slice(2);
if (args.includes('--once')) {
  console.log('⚡ Running single instant sync to GitHub...');
  syncToGithub();
  process.exit(0);
}

console.log('====================================================');
console.log('🔥 BCE CONNECTOR - AUTOMATIC GITHUB PUSH ENGINE 🔥');
console.log('====================================================');
console.log(`📁 Watching folder: ${ROOT_DIR}`);
console.log('✨ Any code edit will be automatically committed & pushed to GitHub!');
console.log('Press Ctrl+C to stop auto-sync.\n');

// Watch directory for changes recursively
fs.watch(ROOT_DIR, { recursive: true }, (eventType, filename) => {
  if (!filename) return;
  // Ignore git folder, node_modules, temp files
  if (
    filename.includes('.git') ||
    filename.includes('node_modules') ||
    filename.endsWith('.tmp') ||
    filename.endsWith('.log')
  ) {
    return;
  }

  console.log(`[${getTimestamp()}] ✏️ File changed: ${filename}`);

  if (pushTimeout) clearTimeout(pushTimeout);
  pushTimeout = setTimeout(() => {
    syncToGithub();
  }, DEBOUNCE_MS);
});
