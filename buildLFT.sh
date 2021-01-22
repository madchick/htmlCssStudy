#!/bin/sh
rm -rf ./littlefunthings/*
cd ..
cd reactStudy
cd littlefunthings
npm run build
cd ..
cd gifmaker
npm run build
cd ..
cd ..
cd javascriptStudy
cd cityroads
npm run build
cd ..
cd ..
cd htmlCssStudy
cp -rf "/Users/macbook/Projects/reactStudy/littlefunthings/build/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings"
cp -rf "/Users/macbook/Projects/reactStudy/gifmaker/build/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/gifmaker"
cp -rf "/Users/macbook/Projects/javascriptStudy/cityroads/dist/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/cityroads"