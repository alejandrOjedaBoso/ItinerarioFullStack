@echo off
cd .\backend\src
start nodemon index.js
cd ..\..\frontend\medicion
start ng serve
