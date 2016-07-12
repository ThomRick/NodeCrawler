ECHO off
CLS
ECHO ############################################
ECHO #          Welcome to NodeCrawler          #
ECHO ############################################
ECHO Starting node environment configuration...
ECHO Set NODE variable...
SET NODE = node.exe
ECHO NODE variable setting done!
ECHO Environment configuration done!
ECHO Starting node application...
ECHO --------------------------------------------
START chrome http://localhost:8080/
CALL NODE ../Main.js
PAUSE