#!/bin/bash

MY_DIRNAME=$(dirname $0)
cd $MY_DIRNAME/../backend/productionApi

open http://127.0.0.1:8000/__docs__/

Rscript pr.R

exit
