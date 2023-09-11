#!/bin/bash
PROJECT_PATH="$(pwd)"

# Before running this script, ensure all npm packages are installed by running
# 'npm install' within the 'client' and 'server' directories.
# then run chmod +x scriptname the first time you run the project it to make it executable

osascript -e "tell app \"Terminal\" to do script \"cd '${PROJECT_PATH}/client' && npm run dev\""
osascript -e "tell app \"Terminal\" to do script \"cd '${PROJECT_PATH}/server' && npm run start\""
