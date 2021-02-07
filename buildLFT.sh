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
cd movie_app
npm run build
cd ..
cd nomflix
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
cp -rf "/Users/macbook/Projects/reactStudy/nomflix/build/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/nomflix"
cp -rf "/Users/macbook/Projects/reactStudy/movie_app/build/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/movie"
cp -rf "/Users/macbook/Projects/javascriptStudy/cityroads/dist/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/cityroads"
cp -rf "/Users/macbook/Projects/htmlCssStudy/animalFace/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/animalface"
cp -rf "/Users/macbook/Projects/htmlCssStudy/luckyNewYear/." "/Users/macbook/Projects/htmlCssStudy/littlefunthings/luckyNewYear"