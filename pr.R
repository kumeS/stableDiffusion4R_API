

#browseURL("http://127.0.0.1:8000/openapi.json")
pr <- plumber::plumb("/Users/sas/Desktop/R_chatAI4R/stableDiffusion4R_API/plumber.R")
pr$run(host = "127.0.0.1", port = 8000)
#pr$run(host = "172.31.7.36", port = 8080)



#curl -X GET "http://0.0.0.0:8080/generateDalleImage4R" -H "accept: */*"
#curl -X GET "http://0.0.0.0:8080/generateDalleImage4R" -H "accept: */*"

