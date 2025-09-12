#!/usr/bin/env bash
set -euo pipefail

# List files and their sizes (human-readable), sorted by size.
# Usage: bash scripts/list-file-sizes.sh [path]
# Defaults to current directory.

ROOT_DIR="${1:-.}"

# Find files while excluding common large/vendor directories, then print sizes.
# du -h provides human-readable sizes; sort -h sorts by human sizes.
find "$ROOT_DIR" -type f \
  -not -path '*/.git/*' \
  -not -path '*/node_modules/*' \
  -not -path '*/.next/*' \
  -not -path '*/dist/*' \
  -not -path '*/build/*' \
  -exec du -h {} + | sort -h

