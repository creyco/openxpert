#!/bin/bash
set -e

MSG="${1:-Actualización landing page}"

git add -A
git commit -m "$MSG"
git push

echo "✅ Push hecho — GitHub Action desplegará automáticamente"
