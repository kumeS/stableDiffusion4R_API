#!/bin/bash

MY_DIRNAME=$(dirname $0)
cd $MY_DIRNAME/../frontend

npm i

npm run build

open http://127.0.0.1:3000/

npm start

exit
