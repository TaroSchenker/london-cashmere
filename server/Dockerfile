# Official Node.js runtime as the base image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ./server/package*.json ./
RUN npm install

# If you have other native dependencies, you might also need additional tools
# Uncomment the following line if you do:
# RUN apt-get update && apt-get install -y python make gcc g++

# Rebuild bcrypt inside the container
RUN npm rebuild bcrypt --build-from-source

# Bundle app source
COPY ./server ./

# Expose port
EXPOSE 3001

# Start the server
ENTRYPOINT ["npm", "run", "start:docker"]
