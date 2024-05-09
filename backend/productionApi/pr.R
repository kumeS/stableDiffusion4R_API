library(plumber)

source("api_key.R")

path <- paste0(getwd(), "/", "plumber.R")
plumber::plumb(path)$run(host = "127.0.0.1", port = 8000)
