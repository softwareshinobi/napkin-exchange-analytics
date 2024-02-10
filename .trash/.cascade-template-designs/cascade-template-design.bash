#!/bin/bash

##

sourceDirectory="../"

##

reset

clear

##

set -e

set -x

##

echo
echo "start cascade template design"
echo

##

find $sourceDirectory -iname "*.html" -exec python3 cascade-template-design.py {} \;

find $sourceDirectory -iname "*.html" -exec python3 cascade-backend-rest-server.py {} \;
