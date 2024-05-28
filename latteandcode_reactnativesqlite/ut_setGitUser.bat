@echo off

@echo iniciando seteo de parametros
@echo .
pause
@echo .
@echo ejecutando: "git config --global user.email "mauriciowest@gmail.com"
call git config --global user.email "mauriciowest@gmail.com"
@echo .
@echo ejecutando: "git config --global user.name  "mwest0101"
call git config --global user.name  "mwest0101"
@echo .
@echo "Proceso finalizado"
@echo "Recuerde que este BAT se ejecuta una sola vez."
pause;