#!/bin/zsh

rm ./src/comp/**/*.js || true;
rm ./src/comp/**/*.jsx || true;
rm ./src/comp/**/*.d.ts || true;

tsc -p tsconfig.export.json;
git add .;