FROM node:18-alpine

LABEL version="0.0.1"
LABEL description="This is the stableDiffusion4R_API docker image."

USER root

WORKDIR /home/frontend

COPY . ./

RUN npm install -g npm && \
    npm install

CMD ["npm", "run", "storybook"]

EXPOSE 6006
