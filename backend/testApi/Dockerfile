FROM node:18-alpine

LABEL version="0.0.1"
LABEL description="This is the stableDiffusion4R_API docker image."

USER root

WORKDIR /home/backend

COPY . ./

RUN yarn

CMD ["yarn", "dev"]

EXPOSE 8787
