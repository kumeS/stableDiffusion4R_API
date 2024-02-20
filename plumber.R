library(plumber)
library(stableDiffusion4R)

#* @apiTitle Plumber stableDiffusion4R API
#* @apiDescription Plumber stableDiffusion4R API

#* Echo back the input
#* @get /generateDalleImage4R/<prompt:character>

ex <- function(prompt) {
content = prompt
results <- generateDalleImage4R(content, Output_image = F, SaveImg =T)


if(prompt != ""){
  return(list(
      prompt = content,
      url = results[2]
      ))
}else{
  return(message("Bad Request: parameter is emput"))
}
}


