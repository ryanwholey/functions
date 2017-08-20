#!/usr/bin/env bash

rm -rf build && \
mkdir -p build/lib/jasmine && \
cp -r ./node_modules/jasmine-core/lib/jasmine-core/boot.js build/lib/jasmine && \
cp -r ./node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js build/lib/jasmine && \
cp -r ./node_modules/jasmine-core/lib/jasmine-core/jasmine.js build/lib/jasmine && \
cp -r ./node_modules/jasmine-core/lib/jasmine-core/jasmine.css build/lib/jasmine && \
cp ./spec/SpecRunner.html build/index.html

