#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// NOTE: With Vercel, frontend and backend deploy together.
// Vercel handles both static files AND serverless functions (API routes)
// from a single project. No separate backend deployment needed!

console.log(chalk.blue('Quest Tracker Backend Deployment'));
console.log(chalk.gray('================================================'));
console.log('');
console.log(chalk.green('With Vercel, your backend deploys automatically!'));
console.log('');
console.log(chalk.gray('How it works:'));
console.log(chalk.gray('  1. Your Express server is in frontend/server.js'));
console.log(chalk.gray('  2. api/index.js exports it as a Vercel serverless function'));
console.log(chalk.gray('  3. vercel.json routes all requests to it'));
console.log(chalk.gray('  4. When you deploy, both frontend and backend go live together'));
console.log('');
console.log(chalk.yellow('To deploy everything:'));
console.log(chalk.white('  npm run deploy'));
console.log('');
console.log(chalk.yellow('Or deploy via the Vercel dashboard:'));
console.log(chalk.white('  1. Go to https://vercel.com/new'));
console.log(chalk.white('  2. Import your GitHub repository'));
console.log(chalk.white('  3. Click Deploy'));

// =============================================================================
// TODO 2: Build Process Setup (Medium)
// =============================================================================
// OBJECTIVE: Add pre-deployment checks
//
// WHAT TO DO:
// 1. Check that all required files exist (package.json, vercel.json, api/index.js)
// 2. Verify Node.js version is 18+
// 3. Run a basic syntax check on server.js
//
// SUCCESS CRITERIA:
// - Script checks for required files before suggesting deployment
// - Node.js version is validated
// - Clear error messages if something is missing
//
// HINT: Use fs.existsSync() to check files
// HINT: Use process.version to check Node.js version
// =============================================================================

const PROJECT_ROOT = path.join(__dirname, '..');

function checkRequiredFiles() {
  const requiredFiles = [
    'package.json',
    'vercel.json',
    path.join('api', 'index.js'),
    path.join('frontend', 'server.js'),
  ];

  const missing = requiredFiles.filter((relPath) => {
    const absPath = path.join(PROJECT_ROOT, relPath);
    return !fs.existsSync(absPath);
  });

  if (missing.length > 0) {
    console.log(chalk.red('Missing required files:'));
    missing.forEach((p) => console.log(chalk.red(`  - ${p}`)));
    return false;
  }

  console.log(chalk.green('Required files: OK'));
  return true;
}

function checkNodeVersion() {
  const raw = process.version;
  const major = Number(String(raw).replace(/^v/, '').split('.')[0]);

  if (!Number.isFinite(major)) {
    console.log(chalk.red(`Unable to parse Node.js version: ${raw}`));
    return false;
  }

  if (major < 18) {
    console.log(chalk.red(`Node.js ${raw} detected. Node.js 18+ is required.`));
    return false;
  }

  console.log(chalk.green(`Node.js version: OK (${raw})`));
  return true;
}

function checkServerSyntax() {
  const serverPath = path.join(PROJECT_ROOT, 'frontend', 'server.js');
  const result = spawnSync(process.execPath, ['--check', serverPath], {
    encoding: 'utf8',
    stdio: 'pipe',
  });

  if (result.status !== 0) {
    console.log(chalk.red('Syntax check failed for frontend/server.js'));
    const output = `${result.stdout || ''}${result.stderr || ''}`.trim();
    if (output) console.log(output);
    return false;
  }

  console.log(chalk.green('Syntax check: OK (frontend/server.js)'));
  return true;
}

console.log('');
console.log(chalk.blue('Pre-deployment checks'));
console.log(chalk.gray('================================================'));

const filesOk = checkRequiredFiles();
const nodeOk = checkNodeVersion();
const syntaxOk = checkServerSyntax();

console.log(chalk.gray('================================================'));

if (!filesOk || !nodeOk || !syntaxOk) {
  console.log(chalk.red('Pre-deployment checks failed. Fix the issues above and try again.'));
  process.exitCode = 1;
} else {
  console.log(chalk.green('All pre-deployment checks passed.'));
}
