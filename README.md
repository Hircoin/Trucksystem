# Full Stack Project

A full-stack web application built with a **React client** and a **Node.js/Express server**.

## Project Structure

```text
Trucksystem/
│
├── client/
│   ├── public/
│   │   └── photos/
│   │
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── constant/         # Application constants
│   │   ├── context/          # React context and state management
│   │   ├── service/          # API and service-related logic
│   │   ├── utils/            # Utility and helper functions
│   │   ├── App.js            # Main application component
│   │   └── index.js          # Application entry point
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── .gitignore
│
├── server/
│   ├── controller/            # Request handling and business logic
│   ├── database/              # Database configuration and connection
│   ├── model/                 # Database models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility and helper functions
│   ├── index.js               # Application entry point
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md
```

## Technologies

### Client

* React
* JavaScript
* HTML
* CSS

### Server

* Node.js
* Express.js
* MongoDB
* JavaScript

## Getting Started

Make sure the following are installed on your system:

* Node.js
* npm
* MongoDB

## Client Setup

Navigate to the client directory:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The client will run at:

```text
http://localhost:3000
```

## Server Setup

Open a new terminal and navigate to the server directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the `server` directory and add the required environment variables.

### Environment Variables

Example:

```env
PORT=5000
MONGODB_URI=your_database_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
npm run dev
```

Or, if the project uses `npm start`:

```bash
npm start
```

## Running the Project

To run the complete application:

1. Start the server from the `server` directory.
2. Start the client from the `client` directory.
3. Open the client URL in your browser.

The client communicates with the server through APIs.

## Environment Variables

Do not commit `.env` files or other files containing sensitive information.

Make sure `.env` is included in the `.gitignore` file.

## Production Build

To create a production build for the client, navigate to the client directory:

```bash
cd client
```

Run:

```bash
npm run build
```

The production files will be generated in the `build` directory.

## Additional Documentation

For more information about the client, see:

```text
client/README.md
```

For more information about the server, see:

```text
server/README.md
```

## License

This project is for personal/educational use.
