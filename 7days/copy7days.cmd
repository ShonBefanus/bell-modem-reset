@echo copying ... 

@echo on
set hh=%time:~-11,2%
set /a hh=%hh%+100
set hh=%hh:~1%
set dateseed=%date:~10,4%%date:~4,2%%date:~7,2%_%hh%%time:~3,2%%time:~6,2%
set myvar="Fallen Black Hole"
SET myvar=###%myvar%###
SET myvar=%myvar:"###=%
SET myvar=%myvar:###"=%
SET game=%myvar:###=%

set destination=M:\Savings\7days

if not exist "%destination%\%game%" mkdir "M:\Savings\7days\%game%"
if not exist "%destination%\%game%\%dateseed%" mkdir "M:\Savings\7days\%game%\%dateseed%"

cd "%destination%\%game%\%dateseed%"
m:
dir
xcopy "C:\Users\mic\AppData\Roaming\7DaysToDie\Saves\Duxeda Mountains\%game%\"  /D /E


