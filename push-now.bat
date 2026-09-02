@echo off
title BCE Connector - Push Now
echo Pushing changes to GitHub right now...
node auto-sync.js --once
pause
