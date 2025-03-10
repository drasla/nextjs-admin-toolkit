#!/bin/zsh

rm ./comp/**/*.js || true;
rm ./comp/**/*.jsx || true;
rm ./comp/**/*.d.ts || true;

tsc -p tsconfig.export.json;
git add .;