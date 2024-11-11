#!/bin/bash

# Get branch name either from environment variable set in workflow (for GitHub Actions)
# or use git command to find (for local Husky hook)
BRANCH_NAME=${BRANCH_NAME:-$(git rev-parse --abbrev-ref HEAD)}

echo "Branch name: $BRANCH_NAME"

# Check if branch name starts with a valid prefix
if [[ ! $BRANCH_NAME =~ ^(HEAD|main|develop|feat/|fix/|ci/|refactor/|docs/|test/|chore/|revert/|perf/).*$ ]]; then
    echo "Invalid branch name: Branch name should start with a valid prefix (feat/, fix/, ci/, refactor/, docs/, test/, chore/, revert/, perf)."
    exit 1
fi

# Check if branch name contains only lowercase letters, numbers, and hyphens
if [[ ! $BRANCH_NAME =~ ^[a-z0-9/-]+$ ]]; then
    echo "Invalid branch name: Branch name should only contain lowercase letters, numbers, slash, and hyphens."
    exit 1
fi
