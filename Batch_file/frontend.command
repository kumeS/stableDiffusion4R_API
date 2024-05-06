#!/bin/bash

MY_DIRNAME=$(dirname $0)
cd $MY_DIRNAME/../frontend

npm i

npm run build

open http://localhost:3000/

npm start

exit
