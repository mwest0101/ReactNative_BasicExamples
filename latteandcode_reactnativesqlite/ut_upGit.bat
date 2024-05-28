@echo off
echo ===================================================
echo Haciendo git add .                      
echo ===================================================
git add .
echo ===================================================
echo Haciendo commit a %1                    
echo ===================================================
git commit -m %1
echo ===================================================
echo Haciendo push                           
echo ===================================================
git push
echo Actualizacion de git finalizada

