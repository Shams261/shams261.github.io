#!/bin/bash

echo "Building Next.js app for GitHub Pages..."
npm run export

echo "Creating .nojekyll file to bypass Jekyll processing..."
touch out/.nojekyll

echo "Deployment files are ready in the 'out' directory."
echo "To deploy to GitHub Pages, you can:"
echo "1. Push the 'out' directory to the gh-pages branch:"
echo "   git add out/ -f"
echo "   git commit -m \"Deploy to GitHub Pages\""
echo "   git subtree push --prefix out origin gh-pages"
echo ""
echo "2. Or configure GitHub Pages in your repository settings to use the gh-pages branch." 