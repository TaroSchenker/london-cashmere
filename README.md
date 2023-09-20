# Running the Project:

## Using CLI:
- Execute the \`start-both.sh\` script.
- Before running this script, ensure all npm packages are installed by executing \`npm install\` within the \`client\` and \`server\` directories.
- To make the script executable, run \`chmod +x start-both.sh\`.

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
- If you prefer to use a local MongoDB instance, you can set it up by following the official MongoDB documentation.
- The server is configured to fall back to a local database connection if the Atlas connection fails. The local connection string is \`mongodb://localhost:27017/london-cashmere\`.
- Remember to replace placeholders like \`<username>\`, \`<password>\`, and \`<cluster-url>\` with your actual MongoDB Atlas credentials.
