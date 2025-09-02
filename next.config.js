// Next.js configuration
// Explicitly set outputFileTracingRoot to avoid monorepo/workspace root warnings
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Limit tracing to this project to silence workspace root inference warnings
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;

