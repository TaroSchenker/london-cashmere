# London Cashmere

London Cashmere is a full-stack e-commerce platform designed to provide a seamless shopping experience for high-quality cashmere products.

## Setup

### Environment Variables

#### Client

In the client root, create a `.env` file with the following variables:

    VITE_API_BASE_URL=http://localhost:3001/api


#### Server

In the server root, create a `.env` file with the following variables:

    MONGO_URI="mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority"
PORT=3001
SECRET_KEY="YOUR_SECRET_KEY"


> **Note:** Replace placeholders like `<username>`, `<password>`, and `<cluster-url>` with your actual MongoDB Atlas credentials.

### Running the Project

#### Using CLI

1. Make the script executable: `chmod +x start-both.sh`.
2. Install npm packages in both `client` and `server` directories: `npm install`.
3. Execute the script: `./start-both.sh`.

#### Using Docker

1. Use the provided `docker-compose.yml` file.
2. Start the services: `docker-compose up`.

## Database Setup

### MongoDB Atlas

1. Create or log in to your MongoDB Atlas account.
2. Set up a new cluster and obtain the connection string.
3. Place the connection string in the `.env` file under the key `MONGO_URI`.

### Local MongoDB

- Follow the official MongoDB documentation for local setup.
- The server falls back to a local database connection (`mongodb://localhost:27017/london-cashmere`) if the Atlas connection fails.

## API Endpoints

- **Users:** `/api/users`
- **Products:** `/api/products`
- **Orders:** `/api/orders`

## Error Handling

- **Database Connection:** Ensure MongoDB Atlas credentials are correct. For local database issues, ensure MongoDB is running.

## Dependencies

- **Express:** Server setup.
- **Mongoose:** MongoDB operations.
- **Helmet, mongoSanitize, hpp:** Security.

