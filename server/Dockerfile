# Official Node.js runtime as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ./server/package*.json ./
RUN npm install

# Bundle app source
COPY ./server ./

# Expose port
EXPOSE 3001

# Install ts-node and nodemon   
RUN npm install -g ts-node nodemon

# Start the server
CMD [ "npm", "start:docker" ]
