# specify the base image
FROM node:alpine

#specifying the WORKDIR
WORKDIR /usr/app

#making the package.json and index.json files available to the docker 
COPY ./package.json ./

# install dependencies
RUN npm install

COPY ./ ./

# setup a startup command
CMD ["npm","start"]
