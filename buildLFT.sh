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
cp -rf "/Users/madchick/Projects/reactStudy/littlefunthings/build/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings"
cp -rf "/Users/madchick/Projects/reactStudy/gifmaker/build/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/gifmaker"
cp -rf "/Users/madchick/Projects/reactStudy/nomflix/build/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/nomflix"
cp -rf "/Users/madchick/Projects/reactStudy/movie_app/build/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/movie"
cp -rf "/Users/madchick/Projects/javascriptStudy/cityroads/dist/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/cityroads"
cp -rf "/Users/madchick/Projects/htmlCssStudy/animalFace/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/animalface"
cp -rf "/Users/madchick/Projects/htmlCssStudy/luckyNewYear/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/luckyNewYear"
cp -rf "/Users/madchick/Projects/htmlCssStudy/goodMemory/." "/Users/madchick/Projects/htmlCssStudy/littlefunthings/goodMemory"