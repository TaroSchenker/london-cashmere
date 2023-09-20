# Running the Project:
You can run the project lcally using either docker or a script which will start the client and server in a CLI.

#### Creating your env variables. 

##### Client .env
- In the client root create a .env with the following variables.
- `VITE_API_BASE_URL=http://localhost:3001/api`

##### Server .env
- In the server root create a .env with the following variables
- `MONGO_URI="mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority"`
- `PORT=3001`
- `SECRET_KEY="YOUR_SECRET_KEY"`

- Remember to replace placeholders like username, password, and cluster-url with your actual MongoDB Atlas credentials.


## Using CLI:
- To make the script executable, run \`chmod +x start-both.sh\`.
- Before running this script, ensure all npm packages are installed by executing \`npm install\` within the \`client\` and \`server\` directories.
- Execute the \`start-both.sh\` script.

## Using Docker:
- Use the provided \`docker-compose.yml\` file to run both the client and server.
- Execute \`docker-compose up\` to start the services.

# Setting Up the Database:

## MongoDB Atlas:
- Create or log in to your MongoDB Atlas account.
- Set up a new cluster and obtain the connection string.
- The connection string will look something like this: \`mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority\`.
- Place this connection string in a \`.env\` file under the key \`MONGO_URI\`.

## Local MongoDB Setup:
- If you prefer to use a local MongoDB instance, you can set it up by following the latest official MongoDB documentation.
- The server is configured to fall back to a local database connection if the Atlas connection fails. The local connection string is \`mongodb://localhost:27017/london-cashmere\`.

