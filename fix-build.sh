#!/bin/bash

echo "Installing required dependencies..."

# Update the browserslist database
npx update-browserslist-db@latest

# Install optimization dependencies
npm install --save-dev rollup-plugin-visualizer vite-plugin-compression terser

# Create public directory if it doesn't exist, and copy the resume file if available
mkdir -p public
if [ -f "Ahmed-Kayani-FlowCV.pdf" ]; then
  cp Ahmed-Kayani-FlowCV.pdf public/
  echo "Resume file copied to public directory."
fi

echo "Dependencies installed. Running build..."
npm run build
