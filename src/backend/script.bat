set b=%1 %2
echo result: > ../../data/output.txt
echo %b% >> ../../data/output.txt
%b% >> ../../data/output.txt

:: This script obviously makes no sense and only serves the purpose of demonstrating command injection
:: It wouldn't do anything interesting if the text passed to it wasn't a valid system command
:: But if you imagine that it did something useful and you could break it that way then it all becomes much cooler
:: It's just an easy way to make our app vulnerable artificially for the purposes of the exercise