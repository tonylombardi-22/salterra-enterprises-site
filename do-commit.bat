@echo off
cd /d C:\Users\tonyl\Documents\salterra-enterprises-site
"C:\Program Files\Git\bin\git.exe" add -A >> git-out.txt 2>&1
"C:\Program Files\Git\bin\git.exe" commit -m "fix: add padding-right to .gold italic clip on about, services, industries, contact" >> git-out.txt 2>&1
"C:\Program Files\Git\bin\git.exe" push >> git-out.txt 2>&1
"C:\Program Files\Git\bin\git.exe" log --oneline -3 >> git-out.txt 2>&1
