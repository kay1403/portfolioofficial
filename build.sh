#!/bin/bash
echo "🚀 Construction du portfolio..."

# Nettoyage
rm -rf dist/
mkdir -p dist/css dist/js

# Compilation Tailwind
echo "📦 Compilation Tailwind CSS..."
npm run build

# Copie des fichiers JS
echo "📋 Copie des fichiers JavaScript..."
cp src/js/main.js dist/js/

# Copie des autres assets (si nécessaire)
# cp -r images dist/

echo "✅ Construction terminée !"
ls -la dist/
