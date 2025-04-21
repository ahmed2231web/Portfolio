#!/bin/bash

echo "Installing optimization dependencies..."

# Function to check if an installation failed
check_error() {
  if [ $? -ne 0 ]; then
    echo "Error installing $1. Please check your internet connection and try again."
    exit 1
  fi
}

# Install development dependencies for optimization one by one
npm install --save-dev rollup-plugin-visualizer
check_error "rollup-plugin-visualizer"

npm install --save-dev vite-plugin-compression
check_error "vite-plugin-compression"

npm install --save-dev terser
check_error "terser"

echo "✅ Dependencies installed successfully!"
echo "Run 'npm run build' to create an optimized production build"
