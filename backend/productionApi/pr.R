#install.packages("plumber")
.libPaths("/Library/Frameworks/R.framework/Versions/4.3-x86_64/Resources/library")

library(plumber)

path <- paste0(getwd(), "/", "plumber.R")
plumber::plumb(path)$run(host = "127.0.0.1", port = 8000)
