@echo off

@echo rar a -v4.2G -r %2 %1 -ag+YYYYMMDD_HHMM -x@%3
rar a -r %2 %1 -ag+YYYY_MM_DD_HHMM_ -x@%3

:EXIT
@echo Fin Backup 