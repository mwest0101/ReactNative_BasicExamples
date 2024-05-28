@echo off
@set NAMEBACKUP=Backup_%1
@set datetimemf=%date:~-4%_%date:~3,2%_%date:~0,2%_%time:~0,2%%time:~3,2%%time:~6,2%_%1

@atg -b:7 15 Backup
@atg -b:7 15 Upload Git

@pause
@call git pull
@call git add .
@call git commit -m "%datetimemf%"
@call git push

@atg -b:7 15 Compress Rar
call %~dp0\ut_compress_unity_rar.bat * %NAMEBACKUP% inc_rar_ignore_list.filesIgnore
@echo Fin de actualizacion
pause
