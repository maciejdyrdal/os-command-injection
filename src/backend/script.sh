#!/bin/bash
b="$1 $2"
echo "result:" > result.txt
echo $b >> result.txt
mycommand() {
	$b >> result.txt
}
mycommand

# This script obviously makes no sense and only serves the purpose of demonstrating command injection
# It wouldn't do anything interesting if the text passed to it wasn't a valid system command
# But if you imagine that it did something useful and you could break it that way then it all becomes much cooler
# It's just an easy way to make our app vulnerable artificially for the purposes of the exercise