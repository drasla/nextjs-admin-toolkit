#!/bin/zsh

rm -rf "./dist"
mkdir ./dist
cp ./module.d.ts ./dist/
cp -r ./scss ./dist/
cp -r ./asset ./dist/
tsc -p tsconfig.export.json;
tsc-alias -p tsconfig.export.json;
git add .;