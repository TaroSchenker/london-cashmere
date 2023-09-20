# Use the official Node.js runtime as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ./client/package*.json ./
RUN npm install

# Bundle app source
COPY ./client ./

# Install vite (As part of the project, not globally)
# Removed the global installation step

# Start the client
CMD [ "npm", "run", "dev:host" ]
