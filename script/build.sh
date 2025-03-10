#!/bin/zsh

rm ./comp/**/*.js;
rm ./comp/**/*.jsx;
rm ./comp/**/*.d.ts;

tsc -p tsconfig.export.json;
git add ./comp;