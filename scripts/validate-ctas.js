#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const files = [
  path.join(projectRoot, 'src/components/slides/NextSteps.tsx'),
  path.join(projectRoot, 'src/components/slides/PartnershipProposal.tsx'),
];

const REQUIRED_SNIPPETS = [
  'CALENDLY_URL',
];

let ok = true;
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const missing = REQUIRED_SNIPPETS.filter(s => !content.includes(s));
  if (missing.length) {
    ok = false;
    console.error(`[CTAs] ${path.relative(projectRoot, f)} missing: ${missing.join(', ')}`);
  } else {
    console.log(`[CTAs] ${path.relative(projectRoot, f)} OK`);
  }
}

process.exit(ok ? 0 : 1);

