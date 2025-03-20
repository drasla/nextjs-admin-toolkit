#!/bin/zsh


rm ./**/*.js
rm ./**/*.d.ts

pnpm tailwindcss -o ./src/asset/style/tailwind.css;

tsc -p tsconfig.export.json;
rm ./**/tsconfig.export.tsbuildinfo;

pnpm git add .;
