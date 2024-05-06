FROM rstudio/plumber

LABEL version="0.0.1"
LABEL description="This is the stableDiffusion4R_API docker image."

USER root

WORKDIR /root

COPY ./plumber.R ./plumber.R

#追加パッケージ
# RUN R -e "install.packages("")"

EXPOSE 8000
