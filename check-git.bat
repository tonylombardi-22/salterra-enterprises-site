@echo off
cd /d C:\Users\tonyl\Documents\salterra-enterprises-site
"C:\Program Files\Git\bin\git.exe" log --oneline -5 > git-out.txt 2>&1
"C:\Program Files\Git\bin\git.exe" status >> git-out.txt 2>&1
